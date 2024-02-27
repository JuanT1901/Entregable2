import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherContainer from "./components/WeatherContainer";
import Loader from "./components/Loader";

function App() {
  const [weather, setWeather] = useState();
  const [currentBg, setCurrentBg] = useState("bg1");
  const [textInput, setTextInput] = useState("");
  const [finder, setFinder] = useState();
  const [coords, setCoords] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "7e18719ba0f1e53fde718c7e1b3e5454";

  const success = (position) => {
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    setCoords(obj);
  };

  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`;

      axios
        .get(url)
        .then(({ data }) => setWeather(data))
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [coords]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (weather) {
      setCurrentBg("bg2");
    }
  }, [weather]);

  useEffect(() => {
    if (textInput) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=${API_KEY}`;

      axios
        .get(url)
        .then(({ data }) => setFinder(data))
        .catch((err) => console.log(err));
    }
  }, [textInput]);

  return (
    <main
      className={`${currentBg} font-["Lato"] flex justify-center items-center min-h-screen text-white px-2`}
    >
      <div>
        {isLoading ? (
          <Loader />
        ) : textInput ? (
          <WeatherContainer weather={finder} setTextInput={setTextInput} />
        )
        :(
          <WeatherContainer weather={weather} setTextInput={setTextInput} />
        )}
      </div>
    </main>
  );
}

export default App;
