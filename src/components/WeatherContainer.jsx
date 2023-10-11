import { useState } from "react";
import "./WeatherContainer.css";
import WeatherStatus from "./WeatherStatus";

const WeatherContainer = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = (temp) => {
    if (isCelsius === true) {
      const celsiusTemp = (temp - 273.15).toFixed(1);
      return `${celsiusTemp}°C`;
    } else {
      const fahrenheitTemp = ((temp - 273.15) * 9 / 5 + 32).toFixed(1);
      return `${fahrenheitTemp}°F`;
    }
  };

  const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius);
  }

  return (
    <main className="min-h-screen grid">
      <span className="text-lg m-7">Weather app</span>

      <article className="relative text-[#026EED]">
        <picture className="m-2">
          <svg
            width="337"
            height="231"
            viewBox="0 0 419 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_702_1503)">
              <path
                d="M5 26.7381C5 9.83369 20.5103 -2.81603 37.0694 0.583238L392.669 73.581C405.086 76.1301 414 87.0593 414 99.7359V247.653C414 262.399 402.046 274.353 387.3 274.353H31.7003C16.9541 274.353 5 262.399 5 247.653V26.7381Z"
                fill="url(#paint0_linear_702_1503)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_702_1503"
                x="0.145401"
                y="0.0283203"
                width="418.709"
                height="284.034"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4.8546" />
                <feGaussianBlur stdDeviation="2.4273" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_702_1503"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_702_1503"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_702_1503"
                x1="5"
                y1="123.225"
                x2="414.028"
                y2="118.181"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ebebeb" />
                <stop offset="0.973958" stop-color="#bdecff" />
              </linearGradient>
            </defs>
          </svg>
        </picture>
        <div className="absolute top-[35px] left-[10px] grid grid-cols-2 grid-rows-4 gap-x-[30px]">
          <span className="temp text-[40px] flex items-end">
            {changeUnitTemp(weather.main.temp)}
          </span>
          <picture className="image">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </picture>
          <div className="data--container flex flex-col justify-end font-normal">
            <WeatherStatus
              property="VIENTO"
              unit="m/s"
              value={weather.wind.speed}
            />
            <WeatherStatus
              property="NUBES"
              unit="%"
              value={weather.clouds.all}
            />
            <WeatherStatus
              property="PRESION"
              unit="hPa"
              value={weather.main.pressure}
            />
          </div>
          <p className="desc--container flex items-center justify-center text-sm mr-1 font-semibold">
            {weather.weather[0].description.toUpperCase()}
          </p>
          <h3 className="location--container flex items-center font-semibold">
            {weather.name}, {weather.sys.country}
          </h3>
        </div>
      </article>

      <div className="flex ">
        <button className="bg-[#38A1D8] m-auto w-[140px] h-[30px] rounded-md shadow-lg shadow-gray-500 hover:bg-[#eef7fc] hover:text-[#38A1D8]" onClick={handleChangeUnitTemp}>{isCelsius ? "Cambiar a °F" : "Cambiar a °C"}</button>
      </div>
    </main>
  );
};
export default WeatherContainer;
