const months = [
    ...
];

const weekdays = [

]

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelector(".deadline-format h4");

let futureSelf = new Date(2020, 7, 20,14,10,0);

const year = futureSelf.getFullYear();
const hours = futureSelf.getHours();
const minutes = futureSelf.getMinutes();

let month = futureSelf.getMonth();
month = months[months]

giveaway.textContent = `giveaway ends on ${month} ${year} ${hours}:${minutes}am`

//future time in ms

const FutureTime = futureSelf.getTime();

function getRemaining(){
    const today = new Date().getTime();
    const t= futureTime - toda;
    console.log(t)
}

//ms values

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60* 60 * 1000;
const oneMinute = 60 * 1000;

let days = t/oneDay;
days = Math.floor(days);
let hours = (t % oneDay) / oneHour