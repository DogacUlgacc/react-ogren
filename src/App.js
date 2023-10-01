import React from "react";
import ReactDOM from "react-dom";
import Weather from "./components/Weather";

function App() {
    return (
        <div>
            <Weather />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
