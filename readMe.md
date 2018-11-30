![Fridge2Table - Your Ingredients. Our Recipes.](https://github.com/hardimanhk/project2/blob/master/public/images/1.png)

# Fridge2Table

Live application: [Fridge2Table](https://radiant-fortress-59044.herokuapp.com/index.html){:target="_blank"}

## Summary

Fridge2Table is the app that will help you turn fridge fossils into dinner GOLD. Just select the ingredients you have on hand and Fridge2Table will dazzle you with all the recipes you never would have thought of on your own. 

## Target Audience

Fridge2Table is perfect for harried millennials, ultra-marathoning baby-boomers or agoraphobic gen-xers. Anyone whose fridge has a jar of pickles, week-old block of parmesan and 4 eggs from your neighbor’s chickens.

We chose to develop Fridge2Table for people who want to: 
-Cook but have no idea what to do with the odds and ends that populate their fridge
-Tap into the eat-at-home movement
-Get ahead of the Fridge2Instapot stampede after Black Friday’s record pressure cooker sales.


## Technologies Used

The application was developed using client-side and server-side tools and technologies:

- HTML 
- CSS
- Javascript
- jQuery
- Unirest node module
- APIs – Spoontacular, Twilio
- Sequelize
- Heroku
- JawsDB


## API, Library, and Database

### API

![Spoontacular](https://github.com/hardimanhk/project2/blob/master/public/images/Spoontacular.png)
The primary API used in this project is Spoontacular, a RESTful API that leverages recipe, food, and nutrition API documentation. The Spoontacular Nutrition, Recipe, and Food API allows you to access over 365,000 recipes, 86,000 food, and 

### Library

![Twilio API](https://github.com/hardimanhk/project2/blob/master/public/images/Twilio.png)
The additional library used in this project is Twilio API. Twilio programmatically allows the user to make and receive phone calls, send and receive text messages, and perform other communication functions using its web service APIs. This functionality lets users text recipe ingredients to their phone so they can use the list while shopping.

### Database

The MySQL database was set up using two primary tables and a join table to connect recipes and ingredients in a many-to-many relationship. This is the database structure:

![MySQL Database - Many-To-Many Relationship](https://github.com/hardimanhk/project2/blob/master/public/images/manytomany-relationship.png)
