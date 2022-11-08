var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum") [i].addEventListener ("click", function () {
    alert("I got Clicked!");

  //What to do when click detected
  });

}

// const buttons = document.querySelectorAll('.drum')
// buttons.forEach(function (currentDrum){
  // currentDrum.addEventListener('click', handleClick)
// })






//this function is the action (click) the event listener is waiting to hear before sending the alert
 // it's the idea of passing a function as an input so that it can be called at a later time.
