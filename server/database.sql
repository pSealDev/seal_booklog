CREATE DATABASE books;

CREATE TABLE book(
    book_id SERIAL PRIMARY KEY,
    book_title VARCHAR (255),
    book_author VARCHAR (255), 
    book_notes VARCHAR (255),
    book_icon VARCHAR (255),
    start_date VARCHAR (255),
    end_date VARCHAR (255)
);
