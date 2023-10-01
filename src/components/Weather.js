import React, { useState } from "react";
import "./style.css";

export default function Weather() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState("");
    const apiKey = "acd7187a12cd132aff328c35b55b6dc6";
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleFetchData();
        }
    };

    const handleFetchData = () => {
        setIsLoading(true);
        setError(null);
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.cod === 200) {
                    setData(data);
                } else {
                    setError("City not found. Please check the city name.");
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                setIsLoading(false);
                setError("An error occurred while fetching data.");
            });
    };

    return (
        <div className="sec">
            <div className="main">
                <h1>Weather App</h1>
                <form>
                    <input
                        type="text"
                        name="name"
                        className="input"
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        placeholder="City"
                    />
                </form>

                {data && (
                    <div
                        className={`weather-condition-img ${
                            isLoading || error ? "nondisplay" : "display"
                        }`}
                    >
                        <img
                            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                            alt="Weather Icon"
                            id="weather-img"
                        />
                        <div id="condition-status">
                            <div className="col-6">
                                {data ? `${Math.round(data.main.temp)}°C` : ""}
                            </div>

                            <div className="col-6">
                                {data && data.weather[0].description}
                            </div>
                        </div>
                    </div>
                )}

                {isLoading ? (
                    <p className="loading-text">Loading...</p>
                ) : error ? (
                    <p className="error-text">{error}</p>
                ) : null}
            </div>
        </div>
    );
}
