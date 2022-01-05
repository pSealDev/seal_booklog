// import { response } from 'express'
import React, { useEffect, useState } from 'react'
import BookGrid from '../components/BookGrid'
import image from '../images/mountains2.jpg'

export function BookFunctions({ children }) {

    const [books, setBooks] = useState([])

    const [book_id, setBookId] = useState(null)

    const [updating, setUpdating] = useState(false)

    const [book_title, setBookTitle] = useState('enter title')

    const [book_author, setBookAuthor] = useState('enter author')

    const [book_notes, setBookNotes] = useState('enter notes')

    const [book_icon, setBookIcon] = useState(image)

    const [start_date, setBookStart] = useState(new Date());

    const [end_date, setBookEnd] = useState(new Date())

    const [page, setPage] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [description, setDescription] = useState("desc");

    // let url = "https://sealbookapi.netlify.app/books.txt/"

    let url = "./books.json"



    const getBooks = async () => {
        console.log("Hello");
        try {
            const response = await fetch("http://localhost:5000/books");
            const jsonData = await response.json();
            setBooks(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }



    useEffect(() => {
        getBooks();
        // setInterval(updateBook());
        // fetch('/api/books')
        // fetch('http://localhost:5000/books')
        //     .then((res) => res.json()) 
        //     .then((json) => setBooks(json.books))
        //     .catch((err) => console.log(err))
    }, []);



    // console.log("BOOKS!!")
    // console.log(books)
    // const getData = () => {
    //     fetch('books.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //         });
    // }

    // useEffect(() => {
    //    const books_data  =  BooksData.map(bookDetail => {
    //         return (<h1>{bookDetail.bookTitle}</h1>)
    //     })

    //     setBooks(books_data)
    //     // fetch('/api/books')
    // //    fetch('./books.json')
    // //         .then((res) => res.json())
    // //         .then((json) => setBooks(json.books))
    // //         .catch((err) => console.log(err))
    // // getData()
    // }, [])

    // console.log("BOOKS " )

    // console.log(JSON.stringify(books));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleStartDateChange = (date) => {
        console.log(date);
        setBookStart(date);
    };

    const handleEndDateChange = (date) => {
        console.log(date);
        setBookEnd(date);
    };


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - books.length) : 0;

    const messageAlert = (actionTaken, id) => {

        var x = document.getElementById("message");

        x.style.fontWeight = "bold"
        if (actionTaken === "create") {
            console.log("id : ", id)
            x.textContent = "You've created book " + id + "."
            x.style.color = "#f60da2"
        } else if (actionTaken === "update") {
            x.textContent = "You've updated book " + id + "."
            x.style.color = "#e27932"
        } else if (actionTaken === "delete") {
            x.textContent = "You've deleted book " + id + "."
            x.style.color = "red"
        } else if (actionTaken === "updating") {
            x.textContent = "You're updating book " + id + "."
            x.style.color = "#2fcc71"
        } else {
            //
        }


    }



    const createBook = async () => {
        try {
            // const res = await fetch('/api/books', {
            const res = await fetch("http://localhost:5000/book", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ book_id, book_title, book_author, book_notes, book_icon, start_date, end_date }),
            })
            const json = await res.json()

            console.log("JSON BOOKS!")
            console.log(json);

            //  setBooks([...books, json.books])

            books.push(json);



            // setDescription("")
            setBookId(null)
            setBookTitle('enter title')
            setBookAuthor('enter author')
            setBookNotes('enter notes')
            setBookIcon(image)
            setBookStart(null)
            setBookEnd(null)

            messageAlert("create", json.book_id);

        } catch (err) {
            console.log(err)
        }
    }

    const deleteBook = async (id) => {
        try {
            //  await fetch(`/api/books/${id}`, { method: 'DELETE' })
            // await fetch(url + "/" + `${id}`, { method: 'DELETE' })
            // setBooks(books.filter((b) => b.id !== id))

            const deleteBook = await fetch(`http://localhost:5000/books/${id}`, {
                method: "DELETE"
            });
            console.log("deleting book")

            setBooks(books.filter((b) => b.book_id !== id))

            messageAlert("delete", id);

        } catch (err) {
            console.log(err)
        }
    }

    const updateBook = async () => {

        console.log("Updating id " + book_id)

        try {
            const body = { book_id, book_title, book_author, book_notes, book_icon, start_date, end_date };
            const res = await fetch(`http://localhost:5000/books/${book_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ book_id, book_title, book_author, book_notes, book_icon, start_date, end_date })
            })

            // console.log("BODY IS ");
            // console.log( JSON.stringify({ body}));

            const json = await res.json()
            // console.log("JSON")
            // console.log(JSON.stringify(json));
            const booksCopy = [...books]

            const index = books.findIndex((b) => b.book_id === book_id)

            console.log("INDEX IS ", index)


            console.log(json)
            booksCopy[index] = json;

            console.log("booksCopy is : ")
            console.log(JSON.stringify(booksCopy))


            setBooks(booksCopy)
            setDescription("")
            setBookTitle('enter title')
            setBookAuthor('enter author')
            setBookNotes('enter notes')
            setBookIcon(image)
            setBookStart(null)
            setBookEnd(null)
            setUpdating(false)
            setBookId(null)
            messageAlert("update", book_id);
            // window.location = "/";

        } catch (err) {
            console.log(err)
        }


        // try {
        //     // const res = await fetch(`/api/books/${bookId}`, {
        //        const res = await fetch(url + "/" + `${bookId}`, {
        //         method: 'PATCH',
        //         body: JSON.stringify({ bookTitle, bookAuthor, bookNotes, bookIcon, startDate, endDate }),
        //     })
        //     const json = await res.json()
        //     const booksCopy = [...books]
        //     const index = books.findIndex((b) => b.id === bookId)

        //     booksCopy[index] = json.books

        //     setBooks(booksCopy)
        //     setBookTitle('enter title')
        //     setBookAuthor('enter author')
        //     setBookNotes('enter notes')
        //     setBookIcon(image)
        //     setBookStart(null)
        //     setBookEnd(null)
        //     setUpdating(false)
        //     setBookId(null)
        //     messageAlert("update", bookId);

        // } catch (err) {
        //     console.log(err)
        // }
    }



    const setBookToUpdate = (id) => {
        messageAlert("updating", id);
        const book = books.find((b) => b.book_id === id)
        const book_str = JSON.stringify(book);
        console.log("Boook is   " + book_str)
        if (!book) return
        setUpdating(true)
        setBookId(book.book_id)

        // setDescription(book.description)
        // console.log("Boook id is  " + book.description)
        setBookTitle(book.book_title)
        setBookAuthor(book.book_author)
        setBookNotes(book.book_notes)
        setBookIcon(book.book_icon)
        setBookStart(book.start_date)
        setBookEnd(book.end_date)
    }



    const submitFormDesc = async (event) => {
        event.preventDefault()


        // if (updating) {
        //     updateBook()
        // } else {
        //     console.log("creating..")
        //     createBook()
        // }
    }

    const submitForm = async (event) => {
        event.preventDefault()

        // try {
        //     const body = { description }
        //     const response = fetch("http://localhost:5000/books", {
        //         method: "POST",
        //         headers : { "Content-Type" : "application/json"},
        //         body: JSON.stringify(body)
        //     })
        //     console.log(response); 
        // } catch (err) {
        //     console.error(err.message)
        // }
        if (updating) {
            updateBook()
        } else {
            console.log("creating..")
            createBook()
        }
    }

    let vars = {
        books, book_id, updating, book_title, book_author, book_notes, book_icon,
        start_date, end_date, page, rowsPerPage, description, handleChangePage, handleChangeRowsPerPage,
        emptyRows, messageAlert, createBook, deleteBook, updateBook, setBookToUpdate, submitForm, handleStartDateChange, handleEndDateChange
    }

    let handlers = { setBooks, setBookId, setUpdating, setBookTitle, setBookAuthor, setBookNotes, setBookIcon, setBookStart, setBookEnd, setPage, setRowsPerPage, setDescription }

    return (
        <div>
            <BookGrid vars={vars} handlers={handlers} />
            {/* {BooksData.map(bookDetail => {
             return (<h1>{bookDetail.bookTitle}</h1>)
         })} */}
        </div>

    )
}

export default BookFunctions


