import "./WeatherContainer.css"

const WeatherContainer = ({ weather }) => {
  console.log(weather);
  return (
    <section>
      <h1>Weather app</h1>

      <div className="main text-black">
        <span className="temp">{weather.main.temp}°F</span>
        <picture className="image">
          <img src="/Frame.png" alt="" />
        </picture>
        <div>
          <p>Viento</p>
          <p>Nubes</p>
          <p>Presión</p>
        </div>
        <p>{weather.weather[0].description}</p>
        <h3>
          {weather.name}, {weather.sys.country}
        </h3>
      </div>
    </section>
  );
};
export default WeatherContainer;
