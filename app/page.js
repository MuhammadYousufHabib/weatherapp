"use client";
import React, { useState } from "react";

const page = () => {
  const [val, setval] = useState("");
  const [temperature, settemperature] = useState(null);
  const [humidity, sethumidity] = useState(null);
  const [windspeed, setwindspeed] = useState(null);
  const [description, setdescription] = useState(null);
  const search = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=Metric&appid=5f6e19a82f79313355d59cc86fe7d292`
    );
    const data = await res.json();
    settemperature(data.main.temp);
    sethumidity(data.main.humidity);
    setwindspeed(data.wind.speed);
    setdescription(data.weather[0].description);
  };

  return (
    <>
      <div className="h-[540px] bg-white p-8 rounded-lg shadow-md w-[400px] bg-gradient-to-br from-purple-900 to-blue-300 border-2 ">
        <div className="flex justify-evenly ">
          <h1 className="text-2xl font-bold mb-4 text-center flex items-center ">
            Weather App
          </h1>

          <img className="w-20 m-0 p-0 " src="weathericon.png"></img>
        </div>
        <div className="flex items-center mb-4">
          <input
            className="rounded h-12 text-black font-light pl-4 border px-2   w-full "
            type="text"
            placeholder="Enter city"
            value={val}
            onChange={(e) => {
              setval(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              search();
            }}
            className=" border-[1px] border-purple-300 bg-gradient-to-br from-purple-900 to-blue-400 text-white px-4 py-2 ml-2 rounded h-12 font-semibold"
          >
            Search
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-light ">{val}</h2>
            <p className="text-white text-xs font-extralight">
              {new Date().toJSON().slice(0, 10)}
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <p className="text-3xl font-semibold">
            {temperature == null ? 0 : temperature}°C
          </p>
          <p className="text-white font-light font-fa">
            {description == null ? null : description}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <div>
              <p className="text-lg text-white font-extralight  ">Wind Speed</p>
              <p className="font-light ">
                {windspeed == null ? null : `${windspeed} m/s`}
              </p>
            </div>
            <div>
              <p className="text-lg text-white font-extralight ">Humidity</p>
              <p className="font-light ml-3 ">
                {humidity === null ? null : `${humidity} %`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
