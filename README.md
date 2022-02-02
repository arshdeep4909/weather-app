# weather-app

link for the working api key
http://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=0b118b933a4610f583b71b7278504dfe

# Javascript destructuring

displayWeather: (data) => {
const { name } = data;
const { icon, description } = data.weather[0];
const { temp, humidity } = data.main;
const { speed } = data.wind;
console.log(name, icon, description, temp, humidity, speed);
},
};

now, here

const { name } = data;

the data has an attribute with title name,
so we do not need to define it again in the value
we just say name and pass data and it will get the value of
name from the data object.
