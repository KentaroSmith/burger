DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (200) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT(0),
    PRIMARY KEY
    (id)
);

INSERT INTO burgers(burger_name)
VALUES("cheeseburger"),
    ("Double Bacon Burger"),
    ("Vegi Burger"),
    ("Mushroom Bacon Swiss");
    
SELECT * FROM burgers;