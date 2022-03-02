///DOM ELEMENTS///
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hands = document.querySelectorAll(".hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360 + 90);
    const minutes = now.getMinutes();
    const minuteDegrees =((minutes / 60) * 360 + ((seconds/60)*6) + 90);
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360 + ((minutes/60)*30) + 90);
    if (secondDegrees === 90) {
        hands.forEach(hand => hand.style.transition = 'none')
  }  else {
    hands.forEach(hand => hand.style.transition = '');
}
    

   secondHand.style.transform = `rotate(${secondDegrees}deg)`;
   minHand.style.transform = `rotate(${minuteDegrees}deg)`;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);