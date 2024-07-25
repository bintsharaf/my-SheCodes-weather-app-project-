function onClickForm(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#Search-input-text");
    console.log(searchInputElement.value);
    
}

let formElement = document.querySelector("#Search-form");
formElement.addEventListener("submit", onClickForm); 


