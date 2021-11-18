import React from "react"

function Header() {
    return (
        <div>
            <header style={{ width: "100%", borderRadius: "1%" }}>
                <h1>Book Log</h1>
                <h2>Add a new book or update an existing one.</h2>
                <br />
            </header>
            <br />
            <div id="message"></div>
            <br />
        </div>

    )
}
export default Header