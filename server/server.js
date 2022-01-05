const express = require('express')
const app = express()
const cors = require('cors')
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json())


//Routes
app.post('/book', async (req, res) => {
  try{
     const { book_id, book_title, book_author, book_notes, book_icon, start_date, end_date} = req.body;
     const newBook = await pool.query("INSERT INTO book (book_title, book_author, book_notes, book_icon, start_date, end_date) VALUES($1, $2, $3, $4, $5,$6) RETURNING *",
      [ book_title, book_author, book_notes, book_icon, start_date, end_date]);
    res.json(newBook.rows[0])
  } catch (err) {
     
      console.error(err.message);
  }
})

//get all books
app.get("/books", async(req, res) => {
    try{
        const allBooks = await pool.query("SELECT * FROM book;")
        res.json(allBooks.rows);
    } catch (err) {
        console.error(err.message)
    }
})

//get a book
app.get("/books/:id", async (req, res) => {
    try {
      const {id} = req.params;
      const book = await pool.query("SELECT * FROM book WHERE book_id = $1", [id])

      res.json(book.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update a book
app.put("/books/:id", async (req, res) => {
    try{
      const { id } = req.params;
      const {  book_id, book_title, book_author, book_notes, book_icon, start_date, end_date } = req.body;
      const updateBook = await pool.query("UPDATE book SET book_title = $1, book_author= $2, book_notes = $3, book_icon = $4,  start_date = $5, end_date = $6 WHERE book_id = $7",
       [ book_title, book_author, book_notes, book_icon, start_date, end_date , id]);
       res.json( req.body);
    window.location = "/";
    } catch (err) {
        console.error(err.message);
    }
})

//delete a book
app.delete("/books/:id", async (req, res) => {
  try {
     const { id } = req.params;
     const deleteBook = await pool.query("DELETE FROM book WHERE book_id = $1", [id]); 
     res.json("Book deleted");
  } catch (err) {
      console.log(err.message);
  }
})


// app.use('/Books/book_table', routesUrls)
app.listen(5000, () => console.log("server is up and running"))

