DROP DATABASE IF EXISTS recipe_Searcher;
CREATE DATABASE recipe_Searcher;

CREATE TABLE "recipes"(
    id INT(9) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    recipe VARCHAR(5000) NOT NULL,
    spoonacular_ID INT(20) NOT NULL,
    image_link VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE "ingredients"(
    id INT(9) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    image_link VARCHAR(100),
    spoonacular_ID INT(20) NOT NULL,
    PRIMARY KEY(id)
);