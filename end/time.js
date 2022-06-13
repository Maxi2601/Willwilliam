// It's just a countdown that i took from w3school so yeah.
// Sex counté down of the day of the unfunny
var countDownDate = new Date("Nov 13, 2022 00:00:00").getTime();

// Update every sexcond
var x = setInterval(function() {

  // N O W
  var now = new Date().getTime();

  // delta between The NOW and The THEN
  var distance = countDownDate - now;
  // year feccionné
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // sex resuté in id timer
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down all hope has been loss 
  // |  ||
  // || |_
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "will-william.tk"
    document.getElementById("end").innerHTML = "BYE EVERYONE SEE YOU IN THE OTHER PAGE)/$&)$&=&$=%/%?(/==&$?%/?%$&("; // pain
  }
}, 1000);

// otuzbir 
