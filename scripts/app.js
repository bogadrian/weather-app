
// dome selectors, globale variable as usual
const inputCity = document.querySelector('form');
const displayTempCity = document.querySelector('.detailes');
const bigImg = document.querySelector('img.time');
const iconImg = document.querySelector('.icon img');
const hideDiv = document.querySelector('.card');
const forecast = new Forecast();




// displa image function, takes in the array tions from accuweather and displayes the day / night img 
const displayImg = (data) => {

  let srcImg = data.IsDayTime ? 'img/day.svg' : 'img/night.svg';
 
  bigImg.setAttribute('src', srcImg);
};

//display function, takes in the array with from accuweather and then render the number of weather icon associated with the condition in a particular location, using that number to display a img icon from folder
const displayIcon = (data) => {
  iconImg.setAttribute('src', `img/icons/${data.WeatherIcon}.svg`)
};

// set weather function takes care of displayng the name of the city and the temparature. It calls also the display icon and display image functions with the acutìweather array
const setWeather = (locLocation, localWeather) => {
  console.log(locLocation.EnglishName)
  console.log(localWeather)
 
displayTempCity.innerHTML = `
     <h5 class="my-3">${locLocation.EnglishName}</h5>
     <div class="my-3">${localWeather.WeatherText}</div>
     <div class="display-4 my-4">
       <span>${localWeather.Temperature.Metric.Value}</span>
       <span>&degC</span>
     `;
console.log(localWeather.EnglishName)
     //remove d-none class to show the elemnts 
    if (hideDiv.classList.contains('d-none')) {
      hideDiv.classList.remove('d-none');
    }
    
     displayImg(localWeather);
     displayIcon(localWeather);
};


// ebvent handler for input city field. then it calls ue returned function and that's it
inputCity.addEventListener('submit', (e) => {
    e.preventDefault();
    const valueInput = e.target.elements.city.value.trim();
    forecast.valueReturned(valueInput);
//set locl storage with the city
localStorage.setItem('city', valueInput);

    e.target.elements.city.value = '';
});


// grab the location if exists from local storage and call value returned function with that location. call it in globale scope so it fires first the event handler for input which updates the value returned with the input value. is a question of when the condition fires 
    if (localStorage.getItem('city')) { 
      forecast.valueReturned(localStorage.getItem('city'));
    }