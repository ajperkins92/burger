DROP IF EXISTS burgers_db;
CREATE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger varchar(200) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);


