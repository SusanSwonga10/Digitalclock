const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const year = document.getElementById("year");
const month = document.getElementById("mnth");
const date = document.getElementById("date");
const day = document.getElementById("day");

const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const mnth =['jan','feb','march','april','may','june','july','aug','sep','oct','nov'];

setInterval(()=>{
    const currTime = new Date();
    // console.log(currTime);
    hrs.innerText = currTime.getHours();
    min.innerText = currTime.getMinutes();
    sec.innerText = currTime.getSeconds();
    year.innerText = currTime.getUTCFullYear();
    date.innerText = currTime.getUTCDate();
    const weekstring = week[currTime.getDay()];
    day.innerText = weekstring;
    const mnthstring = mnth[currTime.getMonth()];
    month.innerText = mnthstring; 
},1000);

