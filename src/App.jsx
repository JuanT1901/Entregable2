import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherContainer from "./components/WeatherContainer";
import Loader from "./components/Loader";

function App() {
  const [weather, setWeather] = useState(null);
  const [currentBg, setCurrentBg] = useState("bg1")

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "7e18719ba0f1e53fde718c7e1b3e5454";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if(weather) {
      setCurrentBg("bg2")
    }
  }, [weather])
  

  return (
    <main className={`${currentBg} font-["Lato"] flex justify-center items-center min-h-screen text-white px-2`}>
      {weather === null ? (
        <Loader />
      ) : (
        <WeatherContainer weather={weather} />
      )}
    </main>
  );
}

export default App;
