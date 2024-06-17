const inputs = document.querySelectorAll(".input");
const dateStamp = "30 December 2024 12:00:00 PM";
const time = document.querySelector(".time");

time.innerText = "End Date: " + dateStamp;

setInterval(() => {
  clock();
}, 1000);

function clock() {
  const endDate = new Date(dateStamp);
  const startDate = new Date();
  const diff = endDate - startDate;
  if (diff < 0 || diff == "") {
    inputs[0].value = 0;
    inputs[1].value = 0;
    inputs[2].value = 0;
    inputs[3].value = 0;
  } else {
    inputs[0].value = Math.floor(diff / 1000 / 60 / 60 / 24);
    inputs[1].value = Math.floor((diff / 1000 / 60 / 60) % 24);
    inputs[2].value = Math.floor((diff / 1000 / 60) % 60);
    inputs[3].value = Math.floor((diff / 1000) % 60);
  }
}

//1 day = 24hr
//1hr = 60min
//1minute = 60sec
