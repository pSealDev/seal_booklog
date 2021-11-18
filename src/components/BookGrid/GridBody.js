import React from "react"
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import Avatar from '@material-ui/core/Avatar'
import DateFnsUtils from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"

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

function GridBody({vars}) {

    return (
        <>
            {vars.books
                .slice(vars.page * vars.rowsPerPage, vars.page * vars.rowsPerPage + vars.rowsPerPage)
                .map(({ id, bookTitle, bookAuthor, bookNotes, bookIcon, startDate, endDate }) => (
                    <TableRow key={id}>
                        <StyledTableCell><Avatar style={{ backgroundColor: "#c38d9e" }}>{id}</Avatar></StyledTableCell>
                        <StyledTableCell>{bookTitle}</StyledTableCell>
                        <StyledTableCell>{bookAuthor}</StyledTableCell>
                        <StyledTableCell>{bookNotes}</StyledTableCell>
                        <StyledTableCell><img style={{ display: 'block', height: '100%', maxHeight: '100px' }} src={bookIcon} alt="icon" /></StyledTableCell>
                        <StyledTableCell>{startDate}</StyledTableCell>
                        <StyledTableCell>{endDate}</StyledTableCell>
                        <StyledTableCell>
                            <IconButton onClick={() => vars.setBookToUpdate(id)}>
                                <EditIcon style={{ fill: "#c38d9e" }} />
                            </IconButton>
                        </StyledTableCell>
                        <StyledTableCell>
                            <IconButton onClick={() => vars.deleteBook(id)}>
                                <DeleteIcon style={{ fill: "#ff0000" }} />
                            </IconButton>
                        </StyledTableCell>
                    </TableRow >
                ))
            }
            {vars.emptyRows > 0 && (
                <TableRow style={{ height: 53 * vars.emptyRows }}>
                    <TableCell />
                </TableRow>
            )}
        </>
    )
}

export default GridBody