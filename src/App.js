import { useState } from "react";
import Data from "./components/Data";
import { API_KEY } from "./lib/config";

function App() {
  const [city, setCity] = useState("");
  const [dark, setDark] = useState(false);
  const [showData, setShowData] = useState(false);
  const [weatherData, setWeatherData] = useState({
    coord: {
      lon: null,
      lat: null,
    },
    weather: [
      {
        main: "",
        description: "",
      },
    ],
    main: {
      temp: null,
      humidity: null,
    },
    wind: {
      speed: null,
    },
    name: "",
  });

  // console.log(dark);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const newData = await data.json();
    setWeatherData(newData);
    setShowData(true);
    setCity("");
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex flex-col h-screen mx-auto text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 justify-center items-center">
        <h1 className="text-2xl font-semibold">Hello Weather</h1>

        {/* Dark mode switch */}
        <div className="my-4 flex flex-row items-center">
          Dark Mode :
          <div
            onClick={() => setDark(!dark)}
            className={`m-2 w-12 h-8 flex items-center bg-gray-300 rounded-full p-1 ${
              dark ? `bg-gray-600` : ``
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md ${
                dark ? `transform translate-x-4 bg-gray-200` : ``
              } `}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 mx-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-500 focus:border-green-400 dark:focus:border-green-400 focus:outline-none rounded-lg"
          />
          <button
            type="submit"
            className="mx-2 px-4 py-2 font-semibold bg-green-500 hover:bg-green-600 border-2 border-green-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>

        {showData ? <Data data={weatherData} /> : undefined}

        <footer className="my-4 p-2 text-center">
          Weather data from{" "}
          <a
            href="https://openweathermap.org/"
            className="text-blue-400 hover:text-blue-500"
          >
            Openweather
          </a>{" "}
          API
        </footer>
      </div>
    </div>
  );
}

export default App;
