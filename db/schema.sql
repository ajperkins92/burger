DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger varchar(200) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);