import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
function Page() {
    return (
        <div>
            <Navbar />
            <Card />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));

export default Page;
