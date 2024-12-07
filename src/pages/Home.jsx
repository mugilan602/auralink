import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

// Helper function for greeting
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good Morning";
    } else if (hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
};

function Home() {
    const [dateTime, setDateTime] = useState(new Date());
    const [weather, setWeather] = useState(null);
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        // Update the date and time every second
        const interval = setInterval(() => setDateTime(new Date()), 1000);

        // Fetch weather data
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=kottayam&appid=93cbcdb553a10958fe19d6e40577ff4c&units=metric`
        )
            .then((response) => response.json())
            .then((data) => {
                setWeather({
                    temp: Math.round(data.main.temp),
                    condition: data.weather[0].main,
                    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                    city: data.name, // Add the city name dynamically
                });
            })
            .catch((error) => console.error("Error fetching weather:", error));

        // Fetch daily quote
        fetch(
            `https://api.api-ninjas.com/v1/quotes?category=inspirational`,
            {
                headers: {
                    "X-Api-Key": "R/8lwg1rx61oQBWWnpozmQ==7uqfH2f9gOcCULrz"
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data && data[0]) {
                    setQuote(data[0]);
                }
            })
            .catch((error) => console.error("Error fetching quote:", error));

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 relative">
            {/* Greeting Section */}
            <div className="text-center mb-10 mt-10">
                <h1 className="text-3xl font-semibold">{getGreeting()}, Saai Srivathsan!</h1>
                <p className="text-lg text-white">Welcome back to Auralink. What would you like to do today?</p>
            </div>

            {/* Date, Time, and Weather Section */}
            <div className="flex items-center justify-center space-x-4">
                {/* Date and Time */}
                <div className="text-center">
                    <p className="text-xl font-medium">
                        {dateTime.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </p>
                    <p className="text-lg">{dateTime.toLocaleTimeString()}</p>
                </div>

                {/* Weather */}
                {weather && (
                    <div className="flex items-center gap-4">
                        <img
                            src={weather.icon}
                            alt={weather.condition}
                            className="w-12 h-12"
                        />
                        <div className="text-center">
                            <p className="text-xl font-semibold">{weather.temp}°C</p>
                            <p className="text-lg">{weather.condition}</p>
                            <p className="text-sm text-gray-300 font-medium">{weather.city}</p>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
}

export default Home;
