function updateWeatherInfo(response) {
    
    let currentTemp = document.querySelector("#temp-number");
    let temperature = Math.round(response.data.temperature.current);
    console.log(response.data.temperature.current);
    

}
function linkCity(city) {
  let  apiKey = "29583e5b03o3adtc2486edaf9f3af0e3"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(updateWeatherInfo);
  }

function onClickForm(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#Search-input-text");
    let searchCityElement = document.querySelector("#Search-input-city");
    searchCityElement.innerHTML = searchInputElement.value;
    linkCity(searchInputElement.value);
}

let formElement = document.querySelector("#Search-form");
formElement.addEventListener("submit", onClickForm); 


