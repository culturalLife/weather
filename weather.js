const API_KEY = `40c3e48bd704265517f9df47abe10535`;
// const API= `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

// https://home.openweathermap.org/api_keys your api keys
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");


const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(response);
    console.log(data);
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>

        </div>
        <div>
            <h2>${data.main.humidity}atm</h2>
            <h4> ${data.main.temp_max}kmph </h4>
            <h4 "style= text-decoration:underline;"> ${data.main.temp_min}kmph </h4>
            <h4> ${data.wind.speed} kmph</h4>


        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        console.log(search.value);
        event.preventDefault();
    }
)