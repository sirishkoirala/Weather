const inputData = document.getElementById('input-data');
const searchBtn = document.getElementById('search-btn');

async function display(city) {
   const url = await fetch(`https://api.weatherapi.com/v1/current.json?key=804473d26fab4227ba4105804242604&q=${city}`);
   return await url.json();
}

searchBtn.addEventListener('click', async () => {
   const data = (inputData.value);
   const result = await display(data);

   navigator.geolocation.getCurrentPosition((position)=> console.log(position))

   document.getElementById('localtime').innerHTML =
      `<h2>Current time : ${result.location.localtime}.</h2>`;

   document.getElementById('temp').innerHTML =
      `<h2>The temprature in ${data} is ${result.current.temp_c} °C</h2>`;

   document.getElementById('sky').innerHTML =
      `<h2>The sky in ${data} is ${result.current.condition.text}. </h2>`;

   document.getElementById('wind').innerHTML =
      `<h2>The Wind Speed is ${result.current.wind_kph} KPH</h2>`;

   document.getElementById('humidity').innerHTML =
      `<h2>The humidity in ${data} is ${result.current.humidity} .</h2>`;

   document.getElementById('uv').innerHTML =
      `<h2>The UV in ${data} is ${result.current.uv} . </h2>`;

   // document.getElementById('imgs').innerHTML =
      const img = document.createElement("img")
      img.src= result.current.condition.icon;
      document.body.appendChild(img);
})


