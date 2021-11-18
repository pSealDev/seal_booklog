import React, { useContext } from "react"
import { Paper, TableBody, TableContainer, TablePagination, Button, Grid, Box } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import GridRows from './BookGrid/GridRows'
import './BookGrid/StyledTableCell'
import GridBody from './BookGrid/GridBody'
import GridHeader from './BookGrid/GridHeader'
import GridForm from './BookGrid/GridForm'

function BookGrid({ vars, handlers }) {

  return (
    <>
      <Box sx={{
        bgcolor: "#eeeeee", width: "75%", height: "100%", boxShadow: 1, borderRadius: "1%", align: "center",
        margin: 'auto',
        direction: "column",
        position: "flex"
      }}>
        <Grid
          container
          // width="80%"
          spacing={0}
          align="center"
          direction="column"
          position="absolute"
          style={{}}
        >
          <Grid item style={{ maxWidth: "100%" }} >
            <Box style={{ maxWidth: "100%" }}>
              <GridHeader />
            </Box>
          </Grid>
          <Grid item style={{ maxWidth: "100%" }} >
            <div className="grid_form" style={{ width: "100%", borderRadius: "1%" }}>
              <form onSubmit={vars.submitForm}>
                <Box >
                  <GridForm vars={vars} handlers={handlers} />
                </Box>
              </form>
            </div>
          </Grid>

          <Grid item style={{ maxWidth: "100%" }}>
            <Paper>
              {
                vars.books?.length > 0 ? (
                  <TableContainer style={{ backgroundColor: "#eeeeee" }} >
                    <br />
                    <Table sx={{
                      width: 300,
                      color: "red"
                    }} aria-label="simple table">
                      <TableHead>
                        <GridRows />
                      </TableHead>
                      <TableBody>
                        <GridBody vars={vars} />
                      </TableBody>
                    </Table>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={100}
                      page={vars.page}
                      onPageChange={vars.handleChangePage}
                      rowsPerPage={vars.rowsPerPage}
                      onRowsPerPageChange={vars.handleChangeRowsPerPage}
                    />
                  </TableContainer>
                ) : vars.books ? (
                  <p>No books</p>
                ) : (
                  <p>Loading</p>
                )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BookGrid