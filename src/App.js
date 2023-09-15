import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
function Page() {
    return (
        <div>
            <Navbar />
            <Card />
            <h3>deneme123</h3>
            <p>lorem morem</p>
            <p>oldu mu acaba</p>
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));

export default Page;
