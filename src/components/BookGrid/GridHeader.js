import React from "react"

function GridHeader() {
    return (
        <>
            <header style={{ width: "100%", borderRadius: "1%" }}>
                <h1>Book Log</h1>
                <h2>Create a new book or update an existing one.</h2>
                <br />
            </header>
            <br />
            <div id="message"></div>
            <br />
        </>
    )
}

export default GridHeader