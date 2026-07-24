const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = url.pathname;

  console.log(`[Request] ${req.method} ${pathname}`);

  // Handle duplicate /restaurants/restaurants/ prefix gracefully
  while (pathname.startsWith('/restaurants/restaurants/')) {
    pathname = '/restaurants/' + pathname.substring('/restaurants/restaurants/'.length);
  }

  // Helper to resolve files either in root or in restaurants/ subfolder
  const resolveFile = (relPath) => {
    const p1 = path.join(__dirname, relPath);
    if (fs.existsSync(p1)) return p1;
    const p2 = path.join(__dirname, 'restaurants', relPath);
    if (fs.existsSync(p2)) return p2;
    return p1;
  };

  // Handle root and main paths (serve the single-tile landing page)
  if (pathname === '/' || pathname === '/index.html' || pathname === '/restaurants' || pathname === '/restaurants/' || pathname === '/restaurants/index.html') {
    const indexPath = resolveFile('index.html');
    fs.readFile(indexPath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading landing page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
    return;
  }

  // Handle compare-presence.js
  if (pathname === '/restaurants/compare-presence.js' || pathname === '/compare-presence.js') {
    const comparePresencePath = resolveFile('compare-presence.js');
    fs.readFile(comparePresencePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading compare-presence.js');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(content);
      }
    });
    return;
  }

  // Map paths starting with /restaurants/orbit-ember-before/ to local orbit-ember-before/
  // and paths starting with /restaurants/orbit-ember/ to local orbit-ember/
  // as well as sandbox copy paths /restaurants/orbit-ember-<number>/
  let filePath = '';
  const sandboxMatch = pathname.match(/^\/restaurants\/orbit-ember-(\d+)(?:\/(.*))?$/);

  if (pathname.startsWith('/restaurants/orbit-ember-before/')) {
    filePath = resolveFile(path.join('orbit-ember-before', pathname.substring('/restaurants/orbit-ember-before/'.length)));
  } else if (sandboxMatch) {
    const sandboxNum = sandboxMatch[1];
    const subPath = sandboxMatch[2] || '';
    filePath = resolveFile(path.join(`orbit-ember-${sandboxNum}`, subPath));
  } else if (pathname.startsWith('/restaurants/orbit-ember/')) {
    filePath = resolveFile(path.join('orbit-ember', pathname.substring('/restaurants/orbit-ember/'.length)));
  } else if (pathname.startsWith('/scripts/shared/')) {
    filePath = resolveFile(path.join('scripts', 'shared', pathname.substring('/scripts/shared/'.length)));
  } else {
    // Fallback: serve relative to root folder or restaurants/
    let reqPath = pathname.startsWith('/') ? pathname.substring(1) : pathname;
    filePath = resolveFile(reqPath);
  }

  // If path is a directory, append index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`File not found: ${pathname}`);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server error: ${err.code}`);
      }
    } else {
      // Dynamic injection of compare-presence script for index.html in legacy if it doesn't have it
      if (ext === '.html' && pathname.includes('orbit-ember-before') && !content.toString().includes('compare-presence.js')) {
        let htmlStr = content.toString();
        // Insert compare-presence script before closing body tag
        const scriptTag = '<script src="../compare-presence.js"></script>\n</body>';
        htmlStr = htmlStr.replace('</body>', scriptTag);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlStr);
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    }
  });
});

// Try to bind to port 8080, fallback to 8085 or find an empty port
const tryListen = (port) => {
  server.listen(port, () => {
    console.log(`\n==================================================`);
    console.log(`Orbit & Ember Server is running at:`);
    console.log(`  http://localhost:${port}/restaurants/orbit-ember/`);
    console.log(`==================================================\n`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      tryListen(port + 1);
    } else {
      console.error('Server failed to start:', err);
    }
  });
};

tryListen(8082);
