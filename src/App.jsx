const App = () => {
  const randomColors = () => {
    let letters = "ABCDEF0123456789";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = () => {
    const color = randomColors();
    document.body.style.background = color;
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="flex justify-center items-center text-center">
      <div className="p-10">
        <h1 className=" text-lg md:text-3xl font-bold mb-3">
          Random Color Generator React App
        </h1>
        <div className="grid gap-5 auto-cols-fr md:grid-cols-5 ">
          <button
            onClick={handleClick}
            className="rounded bg-yellow-400 px-5 py-1 mr-3"
          >
            Click Me
          </button>
          <button
            onClick={handleClick}
            className="rounded bg-blue-400 px-5 py-1 mr-3"
          >
            Click Me
          </button>
          <button
            onClick={handleClick}
            className="rounded bg-green-400 px-5 py-1 mr-3"
          >
            Click Me
          </button>
          <button
            onClick={handleClick}
            className="rounded bg-red-400 px-5 py-1 mr-3"
          >
            Click Me
          </button>
          <button
            onClick={handleClick}
            className="rounded bg-orange-400 px-5 py-1 mr-3"
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
