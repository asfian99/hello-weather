const Data = ({ data }) => {
  const { name, timezone } = data;
  return (
    <div className="my-8 mx-2 p-4 bg-white dark:bg-gray-700 rounded-lg shadow flex flex-col justify-center items-center">
      <h2>Data</h2>
      <h2 className="text-xl font-bold">{name}</h2>
      <h2>{timezone}</h2>
    </div>
  );
};

export default Data;
