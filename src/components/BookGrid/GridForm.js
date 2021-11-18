import React from "react"
import { Paper, TableBody, TableContainer, TablePagination, Button, Grid, Box } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { DatePicker } from '@mui/lab';
import { TextField } from '@material-ui/core';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function GridForm({ vars, handlers }) {


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} >
                    <input type="text" className="form-control" placeholder="BookColor" value={vars.bookTitle} onChange={e => handlers.setBookTitle(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <input type="text" className="form-control" placeholder="BookAuthor" value={vars.bookAuthor} onChange={e => handlers.setBookAuthor(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <TextField
                        placeholder="book notes"
                        multiline
                        rows={5}
                        rowsMax={4}
                        value={vars.bookNotes}
                        onChange={e => handlers.setBookNotes(e.target.value)}
                    />
                    {/* <input type="textarea" className="form-control" placeholder="BookText" value={vars.bookNotes} onChange={e => handlers.setBookNotes(e.target.value)} /> */}
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <input type="text" className="form-control" placeholder="BookIcon" value={vars.bookIcon} onChange={e => handlers.setBookIcon(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                    {/* <DatePicker value={vars.startDate ? vars.startDate : ''} onChange={handlers.setBookStart} /> */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                   <DatePicker
                        label="Start Date"
                        value={vars.startDate}
                        onChange={vars.handleStartDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>
                    {/* </MuiPickersUtilsProvider> */}
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                   <DatePicker
                        label="End Date"
                        value={vars.startDate}
                        onChange={vars.handleEndDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <br />
                    <Button type="submit" style={{ backgroundColor: '#c38d9e', color: '#FFFFFF', fontWeight: 'bold' }} variant="outlined" >{vars.updating ? 'Update' : 'Create'}</Button></Grid>
            </Grid>
        </>

    )
}

export default GridForm