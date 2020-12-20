import { useState } from "react";
import Data from "./components/Data";

const API_KEY = "f94ae2cc03c6b614017e6b6263489f71";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  // console.log(city);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const newData = await data.json();
    setWeatherData(newData);
  };

  return (
    <div className="">
      <div className="flex flex-col h-screen mx-auto text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 justify-center items-center">
        <h1 className="my-4 text-xl font-semibold">Hello Weather</h1>
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
          <Data data={weatherData} />
        </form>
      </div>
    </div>
  );
}

export default App;
