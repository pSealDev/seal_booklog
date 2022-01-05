import React from "react"
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import Avatar from '@material-ui/core/Avatar'


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#3ba395',
        color: theme.palette.common.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    body: {
        fontSize: 18,
    }
}))(TableCell);



function GridBody({ vars }) {

    return (
        <>

        {console.log("VARS.books" , vars.books)}

            {/* {Books.map((bookDetail, index) => {
                return <h1>{bookDetail.bookTitle}</h1>
            })}  */}

            {/* <SignUp /> */}

            {!(vars.books.some(item => item === undefined)) && vars.books?.length > 0 ?(vars.books
                .slice(vars.page * vars.rowsPerPage, vars.page * vars.rowsPerPage + vars.rowsPerPage)
                .map(({ book_id, book_title, book_author, book_notes, book_icon, start_date, end_date }) => (
                    <TableRow key={book_id}>
                        <StyledTableCell><Avatar style={{ backgroundColor: "#c38d9e" }}>{book_id}</Avatar></StyledTableCell>
                        {/* <StyledTableCell>{description}</StyledTableCell> */}
                        <StyledTableCell>{book_title}</StyledTableCell>
                        <StyledTableCell>{book_author}</StyledTableCell>
                        <StyledTableCell>{book_notes}</StyledTableCell>
                        <StyledTableCell><img style={{ display: 'block', height: '100%', maxHeight: '100px' }} src={book_icon} alt="icon" /></StyledTableCell>
                        <StyledTableCell>{start_date}</StyledTableCell>
                        <StyledTableCell>{end_date}</StyledTableCell>
                        <StyledTableCell>
                            <IconButton onClick={() => vars.setBookToUpdate(book_id)}>
                                <EditIcon style={{ fill: "#c38d9e" }} />
                            </IconButton>
                        </StyledTableCell>
                        <StyledTableCell>
                            <IconButton onClick={() => vars.deleteBook(book_id)}>
                                <DeleteIcon style={{ fill: "#ff0000" }} />
                            </IconButton>
                        </StyledTableCell>
                    </TableRow >
                ))
            ) : vars.books ? ("no books") : ("loading")}
            {vars.emptyRows > 0 && (
                <TableRow style={{ height: 53 * vars.emptyRows }}>
                    <TableCell />
                </TableRow>
            )}

        </>
    )
}

export default GridBody