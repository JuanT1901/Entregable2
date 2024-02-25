/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import "./WeatherContainer.css";
import WeatherStatus from "./WeatherStatus";

const WeatherContainer = ({ weather, setTextInput }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const changeUnitTemp = (temp) => {
    if (isCelsius === true) {
      const celsiusTemp = (temp - 273.15).toFixed(1);
      return `${celsiusTemp}°C`;
    } else {
      const fahrenheitTemp = (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
      return `${fahrenheitTemp}°F`;
    }
  };

  const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius);
  };

  const handleForm = (event) => {
    event.preventDefault();
    setTextInput(city.current.value.toLowerCase().trim());
  };

  const city = useRef();

  return (
    <main className="min-h-screen flex flex-col">
  
      <span className="font-extrabold text-2xl m-7 drop-shadow-2xl flex justify-center py-8">
        Weather app
      </span>

      <form
        className="flex flex-wrap items-center justify-center mb-11 py-4"
        onSubmit={handleForm}
      >
        <input
          className="text-slate-700 rounded-md"
          type="text"
          placeholder="City"
          ref={city}
        />
        <button className="bg-[#38A1D8] mx-2 w-[110px] h-[28px] rounded-md shadow-lg shadow-gray-500 hover:bg-[#eef7fc] hover:text-[#38A1D8]">
          Search
        </button>
      </form>


      <article className="text-[#026EED] bg-[rgba(228,237,250,0.61)] flex items-center justify-around rounded-lg flex-col py-5">

        <h2 className="location--container font-semibold text-2xl text-[#026EED]">
          {weather?.name}, {weather?.sys.country}
        </h2>
        <span className="temp text-2xl flex items-end">
          {changeUnitTemp(weather?.main.temp)}
        </span>

        <figure>
          <img className="w-[120px] h-[120px]" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
        </figure>
        <div className="font-medium">
          <p className="desc--container flex items-center justify-center text-sm mr-1 font-semibold">
            {weather?.weather[0].description.toUpperCase()}
          </p>
          <div className="data--container flex flex-col justify-between font-normal py-3">
            <WeatherStatus
              property="VIENTO"
              unit="m/s"
              value={weather?.wind.speed}
            />
            <WeatherStatus
              property="NUBES"
              unit="%"
              value={weather?.clouds.all}
            />
            <WeatherStatus
              property="HUMEDAD"
              unit="%"
              value={weather?.main.humidity}
            />
          </div>
        </div>
        
        <div className="flex ">
          <button
            className="bg-[#38A1D8] text-white m-auto w-[140px] h-[30px] rounded-md shadow-lg shadow-gray-500 hover:bg-[#eef7fc] hover:text-[#38A1D8]"
            onClick={handleChangeUnitTemp}
          >
            {isCelsius ? "Cambiar a °F" : "Cambiar a °C"}
          </button>
        </div>
      </article>



    </main>
  );
};
export default WeatherContainer;
