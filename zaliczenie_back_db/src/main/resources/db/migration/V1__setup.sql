CREATE TABLE album (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(60) NOT NULL,
    image_path VARCHAR(100) NOT NULL
);

CREATE TABLE login_event (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60),
    login_date DATE NOT NULL
);

INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 1','album_placeholder1.jpg');
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 2',"album_placeholder2.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 3',"album_placeholder1.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 4',"album_placeholder2.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 5',"album_placeholder1.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 6',"album_placeholder1.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 7',"album_placeholder1.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 8',"album_placeholder2.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 9',"album_placeholder1.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 10',"album_placeholder2.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 11',"album_placeholder2.jpg");
INSERT INTO album (title,image_path) VALUES ('Tytuł albumu 12',"album_placeholder1.jpg");