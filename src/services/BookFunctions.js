import React, { useEffect, useState } from 'react'
import BookGrid from '../components/BookGrid'
import image from '../images/mountains2.jpg'

export function BookFunctions({ children }) {

    const [books, setBooks] = useState(null)

    const [bookId, setBookId] = useState(null)

    const [updating, setUpdating] = useState(false)

    const [bookTitle, setBookTitle] = useState('enter title')

    const [bookAuthor, setBookAuthor] = useState('enter author')

    const [bookNotes, setBookNotes] = useState('enter notes')

    const [bookIcon, setBookIcon] = useState(image)

    const [startDate, setBookStart] = useState(new Date());

    const [endDate, setBookEnd] = useState(new Date())

    const [page, setPage] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    useEffect(() => {
        fetch('/api/books')
            .then((res) => res.json())
            .then((json) => setBooks(json.books))
            .catch((err) => console.log(err))
    }, [])

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
            const res = await fetch('/api/books', {
                method: 'POST',
                body: JSON.stringify({ bookTitle, bookAuthor, bookNotes, bookIcon, startDate, endDate }),
            })
            const json = await res.json()

            setBooks([...books, json.books])
            setBookTitle('enter title')
            setBookAuthor('enter author')
            setBookNotes('enter notes')
            setBookIcon(image)
            setBookStart(null)
            setBookEnd(null)

            messageAlert("create", json.books.id);

        } catch (err) {
            console.log(err)
        }
    }

    const deleteBook = async (id) => {
        try {
            await fetch(`/api/books/${id}`, { method: 'DELETE' })
            setBooks(books.filter((b) => b.id !== id))

            messageAlert("delete", id);

        } catch (err) {
            console.log(err)
        }
    }

    const updateBook = async () => {
        try {
            const res = await fetch(`/api/books/${bookId}`, {
                method: 'PATCH',
                body: JSON.stringify({ bookTitle, bookAuthor, bookNotes, bookIcon, startDate, endDate }),
            })
            const json = await res.json()
            const booksCopy = [...books]
            const index = books.findIndex((b) => b.id === bookId)

            booksCopy[index] = json.books

            setBooks(booksCopy)
            setBookTitle('enter title')
            setBookAuthor('enter author')
            setBookNotes('enter notes')
            setBookIcon(image)
            setBookStart(null)
            setBookEnd(null)
            setUpdating(false)
            setBookId(null)
            messageAlert("update", bookId);

        } catch (err) {
            console.log(err)
        }
    }



    const setBookToUpdate = (id) => {

        messageAlert("updating", id);

        const book = books.find((b) => b.id === id)
        if (!book) return
        setUpdating(true)
        setBookId(book.id)
        setBookTitle(book.bookTitle)
        setBookAuthor(book.bookAuthor)
        setBookNotes(book.bookNotes)
        setBookIcon(book.bookIcon)
        setBookStart(book.startDate)
        setBookEnd(book.endDate)
    }



    const submitForm = async (event) => {
        event.preventDefault()

        if (updating) {
            updateBook()
        } else {
            console.log("creating..")
            createBook()
        }
    }

    let vars = {
        books, bookId, updating, bookTitle, bookAuthor, bookNotes, bookIcon,
        startDate, endDate, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage,
        emptyRows, messageAlert, createBook, deleteBook, updateBook, setBookToUpdate, submitForm, handleStartDateChange, handleEndDateChange
    }

    let handlers = { setBooks, setBookId, setUpdating, setBookTitle, setBookAuthor, setBookNotes, setBookIcon, setBookStart, setBookEnd, setPage, setRowsPerPage }

    return (
        <BookGrid vars={vars} handlers={handlers} />
    )
}

export default BookFunctions


