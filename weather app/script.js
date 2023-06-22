const inputBox=document.querySelector('.input-box');
const searchBtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key = "4552d0c351cc6a438e1e99093209de83";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data)

}
searchBtn.addEventListener('click', ()=>{
    // alert("hello");
    checkWeather(inputBox.value);
})
