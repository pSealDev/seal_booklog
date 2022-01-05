import React from "react"
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

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

function GridRows() {
  return (
    <>
      <TableRow>
        <StyledTableCell>Book_Id</StyledTableCell>
        <StyledTableCell>Title</StyledTableCell>
        <StyledTableCell>Author</StyledTableCell>
        <StyledTableCell>Notes</StyledTableCell>
        <StyledTableCell>Icon</StyledTableCell>
        <StyledTableCell>Start Date</StyledTableCell>
        <StyledTableCell>End Date</StyledTableCell>
        <StyledTableCell>Update</StyledTableCell>
        <StyledTableCell>Delete</StyledTableCell>
      </TableRow>
    </>
  )
}

export default GridRows