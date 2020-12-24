import { useState } from "react";

const api = {
  key: "633ba3adcf038d94131a035376d23472",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery("");
          console.log(data);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={weather?.main?.temp > 16 ? "app warm" : "app"}>
      <main>
        <div className="app__searchBox">
          <input
            type="text"
            className="app__searchBar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="app__locationBox">
          <div className="app__location">
            {weather?.name}, {weather?.sys?.country}
          </div>
          <div className="app__date">{dateBuilder(new Date())}</div>
        </div>
        <div className="app__weatherBox">
          <div className="app__temp">{Math.round(weather?.main?.temp)}°C</div>
          <div className="app__weather">{weather?.weather[0]?.main}</div>
        </div>
      </main>
    </div>
  );
}
