let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/';

let xhrbtn = document.querySelector("#xhr");
let fetchbtn = document.querySelector("#fetch");
let axiosbtn = document.querySelector("#axios");
let display = document.querySelector("#quote");

xhrbtn.addEventListener("click", function() {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let quote = JSON.parse(XHR.responseText)[0];
      display.innerText = quote;
    }
  }
  XHR.open("GET", url);
  XHR.send();
});