
const MENU_DATA = {
  disclaimer: "Consuming raw or undercooked meat, poultry, seafood, shellfish, or eggs may increase the risk of foodborne illness. Please inform your server of allergies or dietary restrictions. Menu items, ingredients, prices, and availability are subject to change. Our kitchen handles common allergens and cannot guarantee an allergen-free environment.",
  
  dietaryLegend: [
    { code: "CF", label: "Chef Favorite", desc: "Signature wood-fired culinary creation" },
    { code: "V", label: "Vegetarian", desc: "Prepared without meat or seafood" },
    { code: "VG", label: "Vegan", desc: "Contains no animal-derived products" },
    { code: "GF", label: "Gluten-Free", desc: "Prepared without gluten-containing ingredients" },
    { code: "SP", label: "Spicy", desc: "Prepared with fresh chili or spice heat" },
    { code: "SE", label: "Seasonal", desc: "Peak seasonal availability" }
  ],

  addons: {
    proteins: [
      { name: "Avocado", price: "$4" },
      { name: "Smoked Bacon", price: "$4" },
      { name: "Fried Egg", price: "$3" },
      { name: "Grilled Chicken", price: "$7" },
      { name: "Creole Shrimp", price: "$9" },
      { name: "Cedar-Plank Salmon", price: "$10" },
      { name: "Hanger Steak", price: "$11" }
    ],
    substitutions: [
      { name: "Gluten-Free Bread", price: "$2" },
      { name: "House Side Salad", price: "No Charge" },
      { name: "Seasonal Fruit", price: "$2" },
      { name: "Smoked Tomato Soup", price: "$3" },
      { name: "Extra House Sauce", price: "$2" },
      { name: "Extra Cheese", price: "$2" },
      { name: "Split-Plate Charge", price: "$4" }
    ]
  },

  menus: {
    dinner: {
      id: "dinner",
      title: "Dinner Menu",
      tagline: "Live-fire oak hearth cooking, dry-aged steaks & nocturnal culinary craft.",
      hours: "Tuesday–Thursday 5:00 PM–10:00 PM | Friday–Saturday 5:00 PM–11:00 PM | Sunday 5:00 PM–9:00 PM",
      themeColor: "#c27a4a",
      sections: [
        {
          name: "Bread & Snacks",
          items: [
            { name: "Ember Bread", price: "$8", desc: "Wood-fired sourdough, smoked sea salt, whipped honey butter.", markers: ["V"], image: "images/flatbread.jpg" },
            { name: "Marinated Olives", price: "$7", desc: "Citrus peel, fresh herbs, charred chile.", markers: ["VG", "GF"] },
            { name: "Deviled Eggs", price: "$10", desc: "Smoked paprika, crispy shallot, chive.", markers: ["GF"] },
            { name: "Crispy Chickpeas", price: "$7", desc: "Ember spice blend, lemon zest.", markers: ["VG", "GF"] },
            { name: "Oysters on the Half Shell", price: "$18 half / $34 dozen", desc: "Mignonette, house hot sauce, grilled lemon.", markers: ["GF"] }
          ]
        },
        {
          name: "Small Plates",
          items: [
            { name: "Charred Shishito Peppers", price: "$11", desc: "Citrus salt, toasted sesame, ember garlic aioli.", markers: ["V", "GF"] },
            { name: "Crispy Calamari", price: "$15", desc: "Cherry peppers, preserved lemon, roasted garlic sauce.", markers: [] },
            { name: "Orbit Meatballs", price: "$16", desc: "Prime beef & heirloom pork, smoked tomato ragù, parmesan, sourdough.", markers: ["CF"] },
            { name: "Coal-Roasted Carrots", price: "$13", desc: "Harissa yogurt, roasted pistachio, mint.", markers: ["V", "GF"] },
            { name: "Wood-Fired Octopus", price: "$19", desc: "White bean purée, roasted pepper, charred lemon, parsley oil.", markers: ["GF"] },
            { name: "Burrata & Peach", price: "$17", desc: "Wood-fired peach, fresh burrata, toasted pistachio, basil, crostini.", markers: ["V", "SE"], pairing: "First Light Spritz" },
            { name: "Smoked Trout Dip", price: "$15", desc: "Pickled red onion, dill, grilled sourdough.", markers: [] },
            { name: "Crispy Brussels Sprouts", price: "$13", desc: "Hot honey, smoked bacon, crisp apple, candied pecan.", markers: ["GF"] },
            { name: "Seared Scallops", price: "$21", desc: "Cauliflower purée, brown butter, caper, golden raisin.", markers: ["GF"], pairing: "Chardonnay" },
            { name: "Roasted Bone Marrow", price: "$18", desc: "Herb salad, red onion jam, grilled sourdough.", markers: ["CF"] }
          ]
        },
        {
          name: "Soups & Salads",
          items: [
            { name: "Smoked Tomato Soup", price: "$11", desc: "Slow-roasted tomato, heavy cream, basil oil.", markers: ["V"] },
            { name: "Seasonal Soup", price: "$12", desc: "Daily chef preparation featuring seasonal local produce.", markers: ["SE"] },
            { name: "House Greens", price: "$11", desc: "Mixed greens, cucumber, heirloom tomato, pickled onion, sunflower seed, herb vinaigrette.", markers: ["VG", "GF"] },
            { name: "Ember Caesar", price: "$13", desc: "Crisp romaine, parmesan reggiano, sourdough crumb, smoked Caesar dressing.", markers: [] },
            { name: "Roasted Beet Salad", price: "$15", desc: "Roasted beets, goat cheese, blood orange, pistachio, balsamic glaze.", markers: ["V", "GF"] },
            { name: "Charred Little Gem Salad", price: "$16", desc: "Little gem lettuce, avocado, radish, chives, green goddess dressing.", markers: ["V", "GF"] }
          ]
        },
        {
          name: "Mains",
          items: [
            { name: "Wood-Fired Half Chicken", price: "$27", desc: "Herb jus, crispy potatoes, roasted seasonal vegetables.", markers: ["CF", "GF"], featured: true, image: "images/hearth.jpg", pairing: "Pinot Noir" },
            { name: "Ember Burger", price: "$18", desc: "Two Angus patties, smoked cheddar, caramelized onion jam, ember sauce, fries.", markers: ["CF"], featured: true, pairing: "Ember Old Fashioned" },
            { name: "Cedar-Plank Salmon", price: "$29", desc: "Wild salmon, farro pilaf, blistered cherry tomato, lemon-herb butter.", markers: ["CF"], featured: true, pairing: "Sauvignon Blanc" },
            { name: "Black Garlic Short Rib", price: "$34", desc: "Slow-braised short rib, parsnip purée, charred broccolini, red-wine reduction.", markers: ["CF", "GF"], featured: true, pairing: "Cabernet Sauvignon" },
            { name: "Fire-Roasted Cauliflower", price: "$23", desc: "Whole roasted cauliflower, white bean purée, salsa verde, toasted almonds.", markers: ["VG", "GF"], featured: true, pairing: "Copper Moon" },
            { name: "House-Made Pappardelle", price: "$25", desc: "Fresh pappardelle, wild mushrooms, brown butter, parmesan, thyme.", markers: ["V"] },
            { name: "Seared Duck Breast", price: "$33", desc: "Spiced sweet potato, braised greens, tart cherry jus.", markers: ["GF"] },
            { name: "Wood-Fired Pork Chop", price: "$33", desc: "Heritage pork chop, apple mostarda, smoked cabbage, cider jus.", markers: ["GF"] },
            { name: "Pan-Roasted Sea Bass", price: "$36", desc: "Chilean sea bass, braised fennel, fingerling potato, saffron tomato broth.", markers: ["GF"] },
            { name: "Shrimp and Grits", price: "$26", desc: "Creole shrimp, smoked tomato gravy, stone-ground cheddar grits, scallion.", markers: ["SP"] },
            { name: "Ember-Roasted Lamb", price: "$38", desc: "Colorado lamb loin, roasted eggplant, spiced chickpea, mint herb yogurt.", markers: ["GF"] },
            { name: "Seasonal Risotto", price: "$27", desc: "Arborio rice, seasonal harvest vegetables, parmesan, truffle oil.", markers: ["V", "GF", "SE"] }
          ]
        },
        {
          name: "From the Grill",
          items: [
            { name: "Eight-Ounce Hanger Steak", price: "$31", desc: "Oak wood-grilled Angus hanger steak. Includes choice of 1 side and 1 sauce.", markers: ["GF"], image: "images/steak.jpg", pairing: "Dark Matter Manhattan" },
            { name: "Eight-Ounce Filet Mignon", price: "$44", desc: "Center-cut beef filet, oak wood-grilled. Includes choice of 1 side and 1 sauce.", markers: ["GF"], pairing: "Cabernet Sauvignon" },
            { name: "Twelve-Ounce New York Strip", price: "$43", desc: "Prime USDA NY Strip, oak wood-grilled. Includes choice of 1 side and 1 sauce.", markers: ["GF"] },
            { name: "Fourteen-Ounce Ribeye", price: "$48", desc: "Hand-cut ribeye steak, oak wood-grilled. Includes choice of 1 side and 1 sauce.", markers: ["GF"] },
            { name: "Double-Cut Pork Chop", price: "$33", desc: "Oak wood-grilled thick pork chop. Includes choice of 1 side and 1 sauce.", markers: ["GF"] },
            { name: "Grilled Swordfish", price: "$35", desc: "Wild swordfish steak, oak wood-grilled. Includes choice of 1 side and 1 sauce.", markers: ["GF"] },
            { name: "Mixed Grill for Two", price: "$79", desc: "Hanger steak, pork chop, half chicken, smoked sausages, 2 sides, 2 sauces.", markers: ["CF"], featured: true }
          ]
        },
        {
          name: "Grill Sides",
          items: [
            { name: "Crispy Potatoes", price: "$7", desc: "Herb salt, garlic aioli.", markers: ["V"] },
            { name: "Charred Broccolini", price: "$7", desc: "Lemon, smoked garlic oil.", markers: ["VG", "GF"] },
            { name: "Roasted Mushrooms", price: "$7", desc: "Thyme, brown butter sauce.", markers: ["V", "GF"] },
            { name: "Seasonal Vegetables", price: "$7", desc: "Wood-grilled market greens & squash.", markers: ["VG", "GF"] },
            { name: "Smoked Cabbage", price: "$7", desc: "Cider butter, fresh chives.", markers: ["GF"] },
            { name: "Creamed Greens", price: "$7", desc: "Spinach, parmesan, nutmeg.", markers: ["V"] },
            { name: "Parmesan Fries", price: "$7", desc: "Truffle salt, chive dip.", markers: ["V"] },
            { name: "White Bean Purée", price: "$7", desc: "Garlic, rosemary oil.", markers: ["VG", "GF"] },
            { name: "Stone-Ground Grits", price: "$7", desc: "Smoked cheddar, scallion.", markers: ["V", "GF"] }
          ]
        },
        {
          name: "Sauces",
          items: [
            { name: "Chimichurri", price: "$2", desc: "Fresh parsley, garlic, red wine vinegar, olive oil.", markers: ["VG", "GF"] },
            { name: "Peppercorn Jus", price: "$2", desc: "Green peppercorns, cognac, heavy cream.", markers: [] },
            { name: "Smoked Garlic Butter", price: "$2", desc: "Roasted garlic, sea salt, chives.", markers: ["V", "GF"] },
            { name: "Red-Wine Reduction", price: "$2", desc: "Shallot, thyme, dark beef reduction.", markers: ["GF"] },
            { name: "Ember Barbecue", price: "$2", desc: "Smoked molasses, bourbon, spice blend.", markers: ["VG"] },
            { name: "Horseradish Cream", price: "$2", desc: "Fresh horseradish, creme fraiche, chive.", markers: ["V", "GF"] },
            { name: "Salsa Verde", price: "$2", desc: "Capers, herbs, charred poblano pepper.", markers: ["VG", "GF"] }
          ]
        },
        {
          name: "Desserts",
          items: [
            { name: "Burnt Honey Cheesecake", price: "$10", desc: "Burnt honey caramel, smoked sea salt, toasted oat crumble.", markers: ["CF"], featured: true, pairing: "Espresso Affogato" },
            { name: "Dark Chocolate Torte", price: "$11", desc: "Rich chocolate ganache, espresso cream, cocoa nibs.", markers: ["GF"] },
            { name: "Wood-Fired Peach Cobbler", price: "$12", desc: "Warm roasted peaches, vanilla bean ice cream, pecan crumble.", markers: ["SE"] },
            { name: "Espresso Affogato", price: "$9", desc: "Vanilla bean gelato drowned in hot house espresso.", markers: ["V"] },
            { name: "Ember Crème Brûlée", price: "$10", desc: "Vanilla custard, caramelized sugar crust.", markers: ["GF"] },
            { name: "Seasonal Sorbet", price: "$8", desc: "Chef’s daily seasonal fruit sorbet.", markers: ["VG", "GF"] },
            { name: "Brown Butter Bread Pudding", price: "$11", desc: "Bourbon caramel sauce, whipped cream.", markers: [] },
            { name: "Dessert Board", price: "$24", desc: "Chef’s selection of three house desserts.", markers: ["CF"] }
          ]
        }
      ]
    },

    breakfast: {
      id: "breakfast",
      title: "Breakfast Menu",
      tagline: "Morning wood-fired pastries, artisan egg plates & fresh roast coffee.",
      hours: "Monday–Friday 7:00 AM–11:00 AM",
      themeColor: "#d97706",
      sections: [
        {
          name: "Breakfast Starters",
          items: [
            { name: "Ember Cinnamon Roll", price: "$8", desc: "Warm house cinnamon roll, burnt honey glaze, toasted pecans.", markers: ["V"] },
            { name: "Seasonal Fruit Plate", price: "$10", desc: "Fresh seasonal fruit, mint, citrus syrup.", markers: ["VG", "GF"] },
            { name: "Greek Yogurt Parfait", price: "$11", desc: "Vanilla Greek yogurt, maple granola, fresh berries, orange blossom honey.", markers: ["V"] },
            { name: "Wood-Fired Banana Bread", price: "$9", desc: "Grilled banana bread slice, whipped brown-butter cream, sea salt.", markers: ["V"] },
            { name: "Morning Pastry Basket", price: "$14", desc: "Croissant, biscuit, seasonal muffin, house fruit preserves.", markers: ["V"] }
          ]
        },
        {
          name: "Eggs & Breakfast Plates",
          items: [
            { name: "Two-Egg Breakfast", price: "$14", desc: "Two eggs any style, breakfast potatoes, choice of bacon or sausage, sourdough toast.", markers: [] },
            { name: "Ember Breakfast Plate", price: "$17", desc: "Two eggs, smoked bacon, maple sausage, breakfast potatoes, charred tomato, biscuit.", markers: [] },
            { name: "Short Rib Hash", price: "$19", desc: "Braised short rib, crispy potatoes, peppers, onions, two eggs, horseradish cream.", markers: ["CF", "GF"], featured: true },
            { name: "Wood-Fired Shakshuka", price: "$17", desc: "Eggs baked in smoked tomato pepper sauce, feta, herbs, grilled sourdough.", markers: ["V", "SP"] },
            { name: "Steak and Eggs", price: "$24", desc: "Six-ounce hanger steak, two eggs, breakfast potatoes, chimichurri.", markers: ["GF"] },
            { name: "Garden Breakfast Bowl", price: "$16", desc: "Roasted sweet potato, quinoa, avocado, greens, tomato, tahini, poached egg. Vegan option.", markers: ["V", "GF"] },
            { name: "Smoked Salmon Plate", price: "$18", desc: "Smoked salmon, soft egg, cucumber, capers, pickled onion, herb cream cheese, sourdough.", markers: [] }
          ]
        },
        {
          name: "Omelets",
          items: [
            { name: "Ember Omelet", price: "$17", desc: "Smoked cheddar, bacon, caramelized onion, roasted pepper.", markers: [] },
            { name: "Garden Omelet", price: "$16", desc: "Spinach, mushroom, tomato, goat cheese, herbs.", markers: ["V"] },
            { name: "South End Omelet", price: "$18", desc: "Short rib, pepper jack, roasted poblano, onion, ember sauce.", markers: ["SP"] },
            { name: "Build Your Own Omelet", price: "$14", desc: "Includes choice of 3 ingredients. Additional ingredients $1 each. Served with potatoes & toast.", markers: [] }
          ]
        },
        {
          name: "Benedicts",
          items: [
            { name: "Classic Benedict", price: "$16", desc: "English muffin, smoked ham, poached eggs, hollandaise.", markers: [] },
            { name: "Ember Benedict", price: "$18", desc: "Cornbread biscuit, short rib, poached eggs, smoked tomato hollandaise.", markers: ["CF"], featured: true },
            { name: "Garden Benedict", price: "$16", desc: "Grilled tomato, spinach, mushroom, poached eggs, lemon hollandaise.", markers: ["V"] },
            { name: "Salmon Benedict", price: "$19", desc: "Smoked salmon, avocado, poached eggs, dill hollandaise.", markers: [] }
          ]
        },
        {
          name: "Griddle",
          items: [
            { name: "Brioche French Toast", price: "$15", desc: "Brown-sugar brioche, vanilla custard, berries, maple syrup.", markers: ["V"] },
            { name: "Wood-Fired Peach French Toast", price: "$17", desc: "Brioche, roasted peaches, mascarpone, pecan crumble, bourbon-maple syrup.", markers: ["SE", "V"], featured: true },
            { name: "Buttermilk Pancakes", price: "$13", desc: "Three pancakes, whipped butter, maple syrup.", markers: ["V"] },
            { name: "Blueberry Lemon Pancakes", price: "$15", desc: "Blueberries, lemon curd, whipped mascarpone.", markers: ["V"] },
            { name: "Ember Hotcakes", price: "$16", desc: "Chocolate hotcakes, burnt marshmallow cream, candied pecans, dark chocolate.", markers: ["V"] }
          ]
        },
        {
          name: "Breakfast Sandwiches",
          items: [
            { name: "Egg and Cheese Biscuit", price: "$9", desc: "Egg, cheddar, house biscuit. Add bacon or sausage for $3.", markers: ["V"] },
            { name: "Ember Breakfast Sandwich", price: "$14", desc: "Fried egg, smoked bacon, cheddar, onion jam, ember sauce, brioche bun.", markers: [] },
            { name: "Avocado Breakfast Sandwich", price: "$13", desc: "Avocado, egg, tomato, arugula, herb spread, multigrain bread.", markers: ["V"] },
            { name: "Short Rib Breakfast Burrito", price: "$16", desc: "Eggs, short rib, potatoes, peppers, cheddar, salsa verde.", markers: [] }
          ]
        },
        {
          name: "Breakfast Sides",
          items: [
            { name: "One Egg", price: "$3", desc: "Any style.", markers: [] },
            { name: "Two Eggs", price: "$5", desc: "Any style.", markers: [] },
            { name: "Smoked Bacon", price: "$5", desc: "Thick-cut smoked bacon.", markers: [] },
            { name: "Maple Sausage", price: "$5", desc: "House maple pork sausage.", markers: [] },
            { name: "Breakfast Potatoes", price: "$5", desc: "Crispy seasoned potatoes.", markers: ["V"] },
            { name: "Avocado", price: "$4", desc: "Fresh sliced avocado.", markers: ["VG", "GF"] },
            { name: "Seasonal Fruit", price: "$5", desc: "Fresh berries & melon.", markers: ["VG", "GF"] },
            { name: "Biscuit with Preserves", price: "$4", desc: "House biscuit, fruit jam.", markers: ["V"] },
            { name: "Sourdough Toast", price: "$3", desc: "Grilled sourdough.", markers: ["V"] }
          ]
        }
      ]
    },

    brunch: {
      id: "brunch",
      title: "Weekend Brunch",
      tagline: "Vibrant weekend social dining, wood-fired morning plates & mimosa flights.",
      hours: "Saturday & Sunday 10:00 AM–2:30 PM",
      themeColor: "#eab308",
      sections: [
        {
          name: "Brunch Shareables",
          items: [
            { name: "Ember Bread", price: "$8", desc: "Wood-fired sourdough, smoked sea salt, whipped honey butter.", markers: ["V"] },
            { name: "Deviled Eggs", price: "$10", desc: "Smoked paprika, crispy shallot, chive.", markers: ["GF"] },
            { name: "Charred Shishito Peppers", price: "$11", desc: "Citrus salt, sesame, ember aioli.", markers: ["V", "GF"] },
            { name: "Crispy Calamari", price: "$15", desc: "Cherry peppers, preserved lemon, roasted garlic sauce.", markers: [] },
            { name: "Coal-Roasted Carrots", price: "$13", desc: "Harissa yogurt, pistachio, herbs.", markers: ["V", "GF"] },
            { name: "Orbit Meatballs", price: "$16", desc: "Beef and pork meatballs, smoked tomato sauce, parmesan, bread.", markers: [] },
            { name: "Brunch Board", price: "$24", desc: "Smoked salmon, deviled eggs, bacon, fruit, biscuits, preserves, butter.", markers: ["CF"] }
          ]
        },
        {
          name: "Brunch Favorites",
          items: [
            { name: "Ember Benedict", price: "$18", desc: "Cornbread biscuit, short rib, poached eggs, smoked tomato hollandaise, potatoes.", markers: ["CF"], featured: true },
            { name: "Short Rib Hash", price: "$19", desc: "Braised short rib, crispy potatoes, peppers, onions, 2 eggs, horseradish cream.", markers: ["CF", "GF"], featured: true },
            { name: "Wood-Fired Breakfast Flatbread", price: "$16", desc: "Egg, bacon, roasted tomato, smoked cheddar, scallion.", markers: [] },
            { name: "Brioche French Toast", price: "$15", desc: "Vanilla custard, berries, mascarpone, maple syrup.", markers: ["V"] },
            { name: "Wood-Fired Peach French Toast", price: "$17", desc: "Roasted peaches, pecan crumble, mascarpone, bourbon-maple syrup.", markers: ["SE", "V"], featured: true },
            { name: "Brunch Burger", price: "$18", desc: "Two beef patties, fried egg, smoked cheddar, bacon, onion jam, fries.", markers: [] },
            { name: "Chicken and Cornbread Waffle", price: "$19", desc: "Crispy chicken, cornbread waffle, hot honey, pickles.", markers: ["SP"] },
            { name: "Garden Breakfast Bowl", price: "$16", desc: "Quinoa, sweet potato, greens, avocado, tomato, tahini, poached egg.", markers: ["V", "GF"] },
            { name: "Crab Cake Benedict", price: "$22", desc: "Crab cakes, poached eggs, Old Bay hollandaise, potatoes.", markers: [] },
            { name: "Steak and Eggs", price: "$24", desc: "Six-ounce hanger steak, two eggs, crispy potatoes, chimichurri.", markers: ["GF"] },
            { name: "Fire-Roasted Cauliflower Bowl", price: "$17", desc: "Cauliflower, white bean purée, greens, avocado, herbs, salsa verde.", markers: ["VG", "GF"] }
          ]
        },
        {
          name: "Brunch Lunch Plates",
          items: [
            { name: "Ember Burger", price: "$18", desc: "Two beef patties, smoked cheddar, onion jam, ember sauce, lettuce, pickles, fries.", markers: ["CF"], featured: true },
            { name: "Crispy Chicken Sandwich", price: "$17", desc: "Buttermilk fried chicken, slaw, pickles, hot honey, brioche bun.", markers: [] },
            { name: "Cedar-Plank Salmon Salad", price: "$21", desc: "Mixed greens, salmon, roasted vegetables, citrus, herbs, lemon vinaigrette.", markers: ["GF"], featured: true },
            { name: "Wood-Fired Chicken Cobb", price: "$18", desc: "Chicken, bacon, egg, avocado, tomato, smoked cheddar, greens, ranch.", markers: ["GF"] },
            { name: "Pappardelle", price: "$21", desc: "Wild mushrooms, brown butter, parmesan, herbs.", markers: ["V"] },
            { name: "Short Rib Grilled Cheese", price: "$18", desc: "Braised short rib, smoked cheddar, onion jam, sourdough, tomato soup.", markers: [] }
          ]
        },
        {
          name: "Brunch Cocktails",
          items: [
            { name: "Classic Mimosa", price: "$10", desc: "Sparkling wine, fresh orange juice.", markers: [] },
            { name: "Blood Orange Mimosa", price: "$12", desc: "Sparkling wine, blood orange, citrus.", markers: [] },
            { name: "Mimosa Flight", price: "$22", desc: "Orange, blood orange, peach, and seasonal fruit mimosas.", markers: ["CF"], image: "images/cocktail.jpg" },
            { name: "Ember Bloody Mary", price: "$13", desc: "Vodka, smoked tomato, house spice blend, pickled vegetables.", markers: ["SP"] },
            { name: "Morning Star", price: "$14", desc: "Gin, grapefruit, elderflower, sparkling wine.", markers: [] },
            { name: "Brunch Old Fashioned", price: "$14", desc: "Bourbon, maple, orange bitters.", markers: [] },
            { name: "Espresso Martini", price: "$15", desc: "Vodka, espresso, coffee liqueur.", markers: ["CF"], featured: true },
            { name: "Zero-Proof Mimosa", price: "$9", desc: "Zero-proof sparkling wine, orange, citrus.", markers: ["VG"] }
          ]
        }
      ]
    },

    lunch: {
      id: "lunch",
      title: "Lunch Menu",
      tagline: "Approachable midday plates, wood-fired combos & fresh grain bowls.",
      hours: "Monday–Friday 11:00 AM–3:00 PM",
      themeColor: "#84cc16",
      sections: [
        {
          name: "Lunch Starters",
          items: [
            { name: "Ember Bread", price: "$8", desc: "Wood-fired sourdough, smoked sea salt, whipped honey butter.", markers: ["V"] },
            { name: "Soup of the Day", price: "$8 cup / $11 bowl", desc: "Daily chef preparation.", markers: ["SE"] },
            { name: "Smoked Tomato Soup", price: "$8 cup / $11 bowl", desc: "Roasted tomato, cream, basil oil.", markers: ["V"] },
            { name: "Crispy Calamari", price: "$15", desc: "Cherry peppers, preserved lemon, roasted garlic sauce.", markers: [] },
            { name: "Orbit Meatballs", price: "$16", desc: "Beef and pork, smoked tomato sauce, parmesan, grilled bread.", markers: [] },
            { name: "Charred Shishito Peppers", price: "$11", desc: "Citrus salt, sesame, ember aioli.", markers: ["V", "GF"] },
            { name: "Coal-Roasted Carrots", price: "$13", desc: "Harissa yogurt, pistachio, herbs.", markers: ["V", "GF"] },
            { name: "Wood-Fired Wings", price: "$15", desc: "Choice of ember barbecue, hot honey, or dry spice.", markers: ["GF"] }
          ]
        },
        {
          name: "Salads",
          items: [
            { name: "House Greens", price: "$11", desc: "Mixed greens, cucumber, tomato, pickled onion, sunflower seed, herb vinaigrette.", markers: ["VG", "GF"] },
            { name: "Ember Caesar", price: "$13", desc: "Romaine, parmesan, sourdough crumb, smoked Caesar dressing.", markers: [] },
            { name: "Roasted Beet Salad", price: "$15", desc: "Beets, goat cheese, orange, pistachio, greens, balsamic.", markers: ["V", "GF"] },
            { name: "Wood-Fired Chicken Cobb", price: "$18", desc: "Chicken, bacon, egg, avocado, tomato, smoked cheddar, ranch.", markers: ["GF"] },
            { name: "Seasonal Grain Salad", price: "$16", desc: "Farro, roasted vegetables, herbs, greens, feta, lemon vinaigrette.", markers: ["V"] },
            { name: "Cedar-Plank Salmon Salad", price: "$21", desc: "Salmon, mixed greens, roasted vegetables, citrus, herbs.", markers: ["GF"], featured: true }
          ]
        },
        {
          name: "Sandwiches",
          items: [
            { name: "Ember Burger", price: "$18", desc: "Two beef patties, smoked cheddar, onion jam, ember sauce, pickles. Served with fries or soup.", markers: ["CF"], featured: true },
            { name: "Crispy Chicken Sandwich", price: "$17", desc: "Fried chicken, slaw, pickles, hot honey.", markers: [] },
            { name: "Grilled Chicken Club", price: "$17", desc: "Chicken, bacon, avocado, tomato, greens, herb mayonnaise.", markers: [] },
            { name: "Short Rib Grilled Cheese", price: "$18", desc: "Short rib, smoked cheddar, onion jam, sourdough.", markers: [] },
            { name: "Roasted Vegetable Sandwich", price: "$15", desc: "Eggplant, peppers, zucchini, goat cheese, pesto, ciabatta.", markers: ["V"] },
            { name: "Blackened Salmon Sandwich", price: "$19", desc: "Salmon, lettuce, tomato, pickled onion, remoulade.", markers: [] },
            { name: "Wood-Fired Turkey Melt", price: "$16", desc: "Turkey, Swiss, caramelized onion, mustard, sourdough.", markers: [] }
          ]
        },
        {
          name: "Lunch Combos",
          items: [
            { name: "Soup and Salad", price: "$14", desc: "Cup of soup and house greens or Caesar.", markers: ["V"] },
            { name: "Half Sandwich and Soup", price: "$15", desc: "Choice of turkey melt, roasted vegetable sandwich, or grilled cheese with cup of soup.", markers: [] },
            { name: "Half Sandwich and Salad", price: "$15", desc: "Choice of turkey melt, roasted vegetable sandwich, or grilled cheese with side salad.", markers: [] },
            { name: "Lunch Trio", price: "$18", desc: "Half sandwich, cup of soup, and small salad.", markers: ["CF"] }
          ]
        }
      ]
    },

    specialty: {
      id: "specialty",
      title: "Specialty & Chef's Table",
      tagline: "Exclusive multi-course live-fire tasting experiences & seasonal highlights.",
      hours: "Available During Dinner Service | Late-Night Available Friday & Saturday 10 PM–12 AM",
      themeColor: "#ef4444",
      sections: [
        {
          name: "Chef’s Featured Experiences",
          items: [
            { name: "Chef’s Fire Table", price: "$85 per guest", desc: "Five-course seasonal tasting menu centered on live-fire wood cooking. Optional wine pairing $45.", markers: ["CF"], featured: true, image: "images/hearth.jpg" },
            { name: "Vegetarian Fire Table", price: "$72 per guest", desc: "Five-course vegetarian live-fire tasting menu.", markers: ["V", "CF"] },
            { name: "Dry-Aged Ribeye for Two", price: "$98", desc: "Twenty-eight-ounce dry-aged ribeye, two sides, two sauces.", markers: ["CF"], featured: true, image: "images/steak.jpg" },
            { name: "Whole Wood-Fired Fish", price: "Market Price", desc: "Whole seasonal fish, charred lemon, herbs, roasted vegetables. Serves two.", featured: true },
            { name: "Ember Tasting Board", price: "$38", desc: "Chef’s selection of three small plates and two signature sauces.", markers: ["CF"] }
          ]
        },
        {
          name: "Seasonal Specials",
          items: [
            { name: "Summer Corn Agnolotti", price: "$26", desc: "Corn, brown butter, tomato, basil, parmesan.", markers: ["V", "SE"] },
            { name: "Wood-Fired Peach and Burrata", price: "$17", desc: "Peaches, burrata, basil, hot honey, grilled bread.", markers: ["V", "SE"] },
            { name: "Autumn Squash Risotto", price: "$27", desc: "Roasted squash, sage, brown butter, pecan.", markers: ["V", "GF", "SE"] },
            { name: "Winter Braised Lamb Shank", price: "$36", desc: "Polenta, root vegetables, red-wine jus.", markers: ["GF", "SE"] },
            { name: "Spring Pea and Asparagus Tart", price: "$18", desc: "Goat cheese, herbs, greens.", markers: ["V", "SE"] }
          ]
        },
        {
          name: "Late-Night Menu",
          items: [
            { name: "Ember Burger", price: "$18", desc: "Two beef patties, smoked cheddar, onion jam, ember sauce, fries.", markers: ["CF"] },
            { name: "Hot Honey Chicken Sandwich", price: "$17", desc: "Fried chicken, hot honey, pickles, slaw.", markers: ["SP"] },
            { name: "Orbit Meatballs", price: "$14", desc: "Beef & pork meatballs, smoked tomato, parmesan, bread.", markers: [] },
            { name: "Loaded Ember Fries", price: "$13", desc: "Fries, smoked cheddar, bacon, jalapeño, ember sauce.", markers: ["SP"] },
            { name: "Crispy Calamari", price: "$13", desc: "Cherry peppers, preserved lemon, garlic sauce.", markers: [] },
            { name: "Wood-Fired Flatbread", price: "$15", desc: "Smoked tomato, mozzarella, pepperoni, hot honey.", markers: ["SP"] },
            { name: "Mushroom Flatbread", price: "$15", desc: "Mushroom, goat cheese, caramelized onion, herbs.", markers: ["V"] },
            { name: "Midnight Chocolate Torte", price: "$10", desc: "Rich chocolate torte, espresso cream.", markers: ["GF"] }
          ]
        }
      ]
    },

    drinks: {
      id: "drinks",
      title: "Drinks & Cellar",
      tagline: "Celestial mixology, craft drafts & curated wines.",
      hours: "Available Daily During Dining Hours",
      themeColor: "#6366f1",
      sections: [
        {
          name: "Specialty Cocktails",
          items: [
            { name: "Solar Flare", price: "$14", desc: "Tequila, blood orange, lime, chile, smoked salt.", markers: ["SP", "CF"], featured: true, image: "images/cocktail.jpg" },
            { name: "Event Horizon Espresso Martini", price: "$15", desc: "Vodka, espresso, coffee liqueur, vanilla.", markers: ["CF"], featured: true },
            { name: "Dark Matter Manhattan", price: "$15", desc: "Rye, amaro, sweet vermouth, black walnut bitters.", markers: [] },
            { name: "Copper Moon", price: "$14", desc: "Bourbon, peach, lemon, ginger, bitters.", markers: [] },
            { name: "First Light Spritz", price: "$13", desc: "Aperitivo, sparkling wine, grapefruit, soda.", markers: [] },
            { name: "Smoked Orchard", price: "$14", desc: "Apple brandy, bourbon, maple, aromatic bitters.", markers: [] },
            { name: "Lunar Garden", price: "$14", desc: "Gin, cucumber, basil, lemon, elderflower.", markers: [] },
            { name: "The Red Giant", price: "$15", desc: "Mezcal, hibiscus, lime, chile, agave.", markers: ["SP"] },
            { name: "Gravity Well", price: "$15", desc: "Dark rum, banana, coffee, walnut, bitters.", markers: [] },
            { name: "Ember Old Fashioned", price: "$14", desc: "Bourbon, smoked maple, orange bitters.", markers: ["CF"] },
            { name: "Starfall Collins", price: "$13", desc: "Vodka, lemon, blackberry, soda.", markers: [] },
            { name: "Celestial Negroni", price: "$15", desc: "Gin, bitter aperitivo, sweet vermouth.", markers: [] }
          ]
        },
        {
          name: "Zero-Proof Cocktails",
          items: [
            { name: "First Light Zero", price: "$10", desc: "Grapefruit, rosemary, lemon, soda.", markers: ["VG"] },
            { name: "Copper Garden", price: "$10", desc: "Carrot, ginger, citrus, honey.", markers: ["V"] },
            { name: "Lunar Bloom", price: "$11", desc: "Hibiscus, berry, lime, sparkling water.", markers: ["VG"] },
            { name: "Smoked Apple Fizz", price: "$11", desc: "Apple, cinnamon, lemon, smoked tea.", markers: ["VG"] },
            { name: "Zero-Proof Old Fashioned", price: "$12", desc: "Nonalcoholic spirit, maple, orange, bitters.", markers: ["VG"] }
          ]
        },
        {
          name: "Wine",
          items: [
            { name: "Prosecco", price: "$10 glass / $38 bottle", desc: "Crisp sparkling white wine, Italy.", markers: [] },
            { name: "Brut Rosé", price: "$13 glass / $48 bottle", desc: "Sparkling rosé, France.", markers: [] },
            { name: "Champagne", price: "$90 bottle", desc: "Classic Brut Champagne, France.", markers: ["CF"] },
            { name: "Pinot Grigio", price: "$10 glass / $38 bottle", desc: "Light & refreshing, Alto Adige.", markers: [] },
            { name: "Sauvignon Blanc", price: "$12 glass / $44 bottle", desc: "Citrus & herbal, Marlborough.", markers: [] },
            { name: "Chardonnay", price: "$13 glass / $48 bottle", desc: "Rich & oaked, Sonoma Coast.", markers: [] },
            { name: "Provence Rosé", price: "$12 glass / $44 bottle", desc: "Dry rosé, Côtes de Provence.", markers: [] },
            { name: "Pinot Noir", price: "$13 glass / $48 bottle", desc: "Cherry & earthy notes, Willamette Valley.", markers: [] },
            { name: "Cabernet Sauvignon", price: "$14 glass / $52 bottle", desc: "Full-bodied red, Napa Valley.", markers: [] },
            { name: "Malbec", price: "$12 glass / $44 bottle", desc: "Plum & dark chocolate, Mendoza.", markers: [] }
          ]
        },
        {
          name: "Draft & Craft Beer",
          items: [
            { name: "Local Lager", price: "$7", desc: "Crisp local Charlotte craft lager.", markers: [] },
            { name: "West Coast IPA", price: "$8", desc: "Piney & citrus hop profile.", markers: [] },
            { name: "Hazy IPA", price: "$8", desc: "Juicy tropical hops.", markers: [] },
            { name: "Amber Ale", price: "$7", desc: "Toasted malt & caramel notes.", markers: [] },
            { name: "Seasonal Sour", price: "$8", desc: "Rotating fruit sour beer.", markers: ["SE"] },
            { name: "Rotating Local Tap", price: "Market Price", desc: "Ask server for today’s feature.", markers: [] }
          ]
        },
        {
          name: "Coffee & Morning Drinks",
          items: [
            { name: "Drip Coffee", price: "$4", desc: "House blend roasted beans.", markers: [] },
            { name: "Espresso", price: "$4", desc: "Single or double shot.", markers: [] },
            { name: "Americano", price: "$4", desc: "Espresso with hot water.", markers: [] },
            { name: "Cappuccino", price: "$5", desc: "Espresso, steamed milk, foam.", markers: [] },
            { name: "Latte", price: "$6", desc: "Espresso & velvety steamed milk.", markers: [] },
            { name: "Cold Brew", price: "$6", desc: "12-hour steep cold brew.", markers: [] },
            { name: "Chai Latte", price: "$6", desc: "Spiced black tea & steamed milk.", markers: [] },
            { name: "Fresh Orange Juice", price: "$5", desc: "Freshly squeezed.", markers: ["VG", "GF"] },
            { name: "Green Juice", price: "$8", desc: "Kale, cucumber, apple, lemon.", markers: ["VG", "GF"] }
          ]
        }
      ]
    },

    happyhour: {
      id: "happyhour",
      title: "Happy Hour",
      tagline: "After-work drinks & fire-grilled bites.",
      hours: "Tuesday–Friday 4:30 PM–6:30 PM | Bar & Patio Only",
      themeColor: "#ec4899",
      sections: [
        {
          name: "Happy Hour Drinks",
          items: [
            { name: "House Wine", price: "$7", desc: "Red, white, or rosé glass.", markers: [] },
            { name: "Draft Beer", price: "$6", desc: "Select local Charlotte craft taps.", markers: [] },
            { name: "Ember Old Fashioned", price: "$9", desc: "Bourbon, smoked maple, orange bitters.", markers: ["CF"] },
            { name: "First Light Spritz", price: "$9", desc: "Aperitivo, sparkling wine, citrus.", markers: [] },
            { name: "Classic Margarita", price: "$9", desc: "Tequila, key lime, agave.", markers: [] },
            { name: "Zero-Proof Spritz", price: "$7", desc: "Grapefruit, rosemary, soda.", markers: ["VG"] }
          ]
        },
        {
          name: "Happy Hour Food",
          items: [
            { name: "Ember Bread", price: "$5", desc: "Wood-fired sourdough, whipped honey butter.", markers: ["V"] },
            { name: "Charred Shishitos", price: "$7", desc: "Citrus salt, ember aioli.", markers: ["V", "GF"] },
            { name: "Orbit Meatballs", price: "$10", desc: "Beef & pork meatballs, smoked tomato, bread.", markers: [] },
            { name: "Crispy Calamari", price: "$10", desc: "Cherry peppers, garlic sauce.", markers: [] },
            { name: "Ember Burger", price: "$13", desc: "Two patties, smoked cheddar, onion jam, fries.", markers: ["CF"] },
            { name: "Wood-Fired Wings", price: "$10", desc: "Choice of barbecue, hot honey, or dry spice.", markers: ["GF"] },
            { name: "Seasonal Flatbread", price: "$11", desc: "Smoked tomato, mozzarella, basil.", markers: ["V", "SE"] },
            { name: "Loaded Ember Fries", price: "$9", desc: "Fries, smoked cheddar, bacon, jalapeño.", markers: ["SP"] }
          ]
        }
      ]
    },

    kids: {
      id: "kids",
      title: "Kids Menu",
      tagline: "For guests 12 and younger. Includes choice of fruit, fries, or vegetables.",
      hours: "Available Daily During Dining Hours",
      themeColor: "#14b8a6",
      sections: [
        {
          name: "Kids Favorites",
          items: [
            { name: "Kids Breakfast", price: "$8", desc: "Egg, bacon or sausage, potatoes, toast.", markers: [] },
            { name: "Kids Pancakes", price: "$8", desc: "Two pancakes, syrup, fruit.", markers: ["V"] },
            { name: "Kids French Toast", price: "$8", desc: "Brioche french toast, maple syrup, fruit.", markers: ["V"] },
            { name: "Cheeseburger", price: "$9", desc: "Beef patty, cheddar cheese, choice of side.", markers: [] },
            { name: "Chicken Tenders", price: "$9", desc: "Crispy tenders, dipping sauce, choice of side.", markers: [] },
            { name: "Buttered Pasta", price: "$8", desc: "Penne pasta, butter, parmesan.", markers: ["V"] },
            { name: "Grilled Cheese", price: "$8", desc: "Melted cheddar on sourdough, choice of side.", markers: ["V"] },
            { name: "Wood-Fired Chicken", price: "$10", desc: "Grilled chicken breast, choice of side.", markers: ["GF"] },
            { name: "Kids Dessert", price: "$5", desc: "Vanilla ice cream or warm cookie.", markers: ["V"] }
          ]
        }
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MENU_DATA;
}
