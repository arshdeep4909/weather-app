let weather = {
  apiKey: "0b118b933a4610f583b71b7278504dfe",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json()) // convert the response into JSON
      .then((data) => this.displayWeather(data));
  },
  displayWeather: (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    const weatherCity = document.querySelector(".city");
    const weatherTemprature = document.querySelector(".temp");
    const weatherDescription = document.querySelector(".description");
    const weatherHumidity = document.querySelector(".humidity");
    const weatherWind = document.querySelector(".wind");
    const weatherIcon = document.querySelector(".icon");

    weatherCity.textContent = `Weather in ${name}`;
    weatherTemprature.textContent = `${temp}°C`;
    weatherDescription.textContent = description;
    weatherHumidity.textContent = `humidity: ${humidity}%`;
    weatherWind.textContent = `Wind Speed: ${speed} Km/h`;
    weatherIcon.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = URL;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search-btn").addEventListener("click", () => {
  weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    weather.search();
  }
  document.querySelector("search-bar").value.style.reset();
});

weather.fetchWeather("Denver");
