CREATE DATABASE tourdargent_db; 
USE tourdargent_db; 

CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    day DATE, 
    hour TIME,
    lastname VARCHAR(128), 
    firstname VARCHAR(128),
    mail VARCHAR(128), 
    phone_number INT(128), 
    country VARCHAR(128), 
    cutlery INT(3)
); 

CREATE TABLE pivate_lounge (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    civility VARCHAR(128),
    lastname VARCHAR(128), 
    firstname VARCHAR(128),
    compagny VARCHAR(128),
    address VARCHAR(128),
    city VARCHAR(128),
    postal_code INT (128),
    country INT (128),
    private_pro VARCHAR(128),
    mail VARCHAR(128),
    phone_number INT(128), 
    day DATE, 
    service VARCHAR(128),
    cutlery INT(3),
    message VARCHAR(1000),
    newletters BOOLEAN
);

CREATE TABLE invitation (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    civility_guest VARCHAR(128),
    lastname_guest VARCHAR(128), 
    firstname_guest VARCHAR(128),
    address_guest VARCHAR(128),
    city_guest VARCHAR(128),
    postal_code_guest INT (128),
    country_guest VARCHAR (128),
    mail_guest VARCHAR(128),
    phone_number_guest INT(128), 
    compagny_guest VARCHAR(128),
    
    civility_host VARCHAR(128),
    lastname_host VARCHAR(128), 
    firstname_host VARCHAR(128),
    address_host VARCHAR(128),
    city_host VARCHAR(128),
    postal_code_host INT (128),
    country_host VARCHAR (128),
    mail_host VARCHAR(128),
    phone_number_host INT(128), 
    compagny_host VARCHAR(128),
    message_host VARCHAR(1000)
);


