const startDate = new Date ("Sep 12, 2022 00:00:00").getTime();

let x = setInterval(function (){
  let now = new Date().getTime();
  let distance = now - startDate;
  let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
  let days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24)).toString().padStart(2,"0");
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,"0");
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,"0");
  let seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2,"0");
  document.getElementsByClassName("time")[0].innerHTML = years + " : " + days + " : " + hours + " : " + minutes + " : " + seconds;
  document.getElementsByClassName('time2')[0].innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, "0") + ' d.';
},1000)

