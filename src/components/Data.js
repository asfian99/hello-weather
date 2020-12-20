const Data = ({ data }) => {
  const { coord, weather, wind, main, name, message } = data;
  return (
    <div className="my-8 mx-2 p-4 bg-white dark:bg-gray-700 rounded-lg shadow flex flex-col justify-center items-center">
      {message ? (
        <p className="text-lg font-semibold capitalize">{message}</p>
      ) : (
        <>
          <p className="text-lg font-semibold">{name}</p>

          <p>
            ( {coord.lon}, {coord.lat} )
          </p>
          <p className="mt-2 text-2xl font-bold">{weather[0].main}</p>
          <p className="mb-2 capitalize text-lg font-medium">
            {weather[0].description}
          </p>
          <p>
            Temperature: <b>{main.temp} C</b>, humidity:{" "}
            <b>{main.humidity} %</b>
          </p>
          <p>
            Wind Speed: <b>{wind.speed} m/s</b>
          </p>
        </>
      )}
    </div>
  );
};

export default Data;
