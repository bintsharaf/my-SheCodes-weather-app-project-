function onClickForm(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#Search-input-text");
    let searchCityElement = document.querySelector("#Search-input-city");
    searchCityElement.innerHTML = searchInputElement.value;
    
}

let formElement = document.querySelector("#Search-form");
formElement.addEventListener("submit", onClickForm); 


