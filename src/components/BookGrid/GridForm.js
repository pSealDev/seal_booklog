import React, { useState } from "react"
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
                    <TextField
                        id="outlined-helperText"
                        label="Title"
                        defaultValue="Title"
                        value={vars.book_title}
                        onChange={e => handlers.setBookTitle(e.target.value)}
                    />
                    {/* <label> Author <br />
                        <input type="text" className="form-control" placeholder="BookTitle" value={vars.book_title} onChange={e => handlers.setBookTitle(e.target.value)} />
                    </label> */}
                </Grid>
                {/* <Grid item xs={12} sm={12} md={4} >
                    <input type="text" className="form-control" placeholder="Description" value={vars.description} onChange={e => handlers.setDescription(e.target.value)} />
                </Grid>  */}
                <Grid item xs={12} sm={12} md={4} >
                <TextField
                        id="outlined-helperText"
                        label="Author"
                        defaultValue="Author"
                        value={vars.book_author}
                        onChange={e => handlers.setBookAuthor(e.target.value)}
                    />
                    {/* <input type="text" className="form-control" placeholder="BookAuthor" value={vars.book_author} onChange={e => handlers.setBookAuthor(e.target.value)} /> */}
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <TextField
                        inputProps={{
                            maxLength: 200,
                        }}
                        label="book notes"
                        placeholder="book notes"
                        multiline
                        rows={5}
                        rowsMax={4}
                        value={vars.book_notes}
                        onChange={e => handlers.setBookNotes(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                <TextField
                        id="outlined-helperText"
                        label="Book Cover URL"
                        defaultValue="Enter an image url"
                        value={vars.book_icon}
                        onChange={e => handlers.setBookIcon(e.target.value)}
                    />
                    {/* <input type="text" className="form-control" placeholder="BookIcon" value={vars.book_icon} onChange={e => handlers.setBookIcon(e.target.value)} /> */}
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Start Date"
                            value={vars.start_date}
                            onChange={vars.handleStartDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="End Date"
                            value={vars.end_date}
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