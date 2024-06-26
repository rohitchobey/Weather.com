const apiKey = "90eb56620138b5c9b3fe444bda7fd996";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const resetBtn = document.querySelector(".reset-btn");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}else{
    var data = await response.json();
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "image/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "image/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "image/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "image/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "image/mist.png";

    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "image/snow.png";
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


