import "./WeatherContainer.css";

const WeatherContainer = ({ weather }) => {
  console.log(weather);
  return (
    <section className="min">
      <h1>Weather app</h1>

      <div className="relative text-[#026EED]">
        <picture>
          <img src="/Rectangle.png" alt="" />
        </picture>
        <div className="absolute top-[20px] left-[20px] grid grid-cols-2 grid-rows-4 gap-x-[30px]">
          <span className="temp text-[40px] flex items-end">{weather.main.temp}°F</span>
          <picture className="image">
            <img className="w-[140px] h-[140px]" src="/Frame.png" alt="" />
          </picture>
          <div className="data--container flex flex-col justify-end font-normal">
            <p>Viento</p>
            <p>Nubes</p>
            <p>Presión</p>
          </div>
          <p className="desc--container flex items-center justify-end">{weather.weather[0].description}</p>
          <h3 className="location--container flex items-center font-semibold">
            {weather.name}, {weather.sys.country}
          </h3>
        </div>
      </div>
    </section>
  );
};
export default WeatherContainer;
