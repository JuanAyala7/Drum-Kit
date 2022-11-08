
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum") [i].addEventListener ("click", function () {
    
      console.log(this.innerHTML);
    
  });

}

// var audio = new Audio('sounds/tom-1.mp3');
//    audio.play();


// const buttons = document.querySelectorAll('.drum')
// buttons.forEach(function (currentDrum){
  // currentDrum.addEventListener('click', handleClick)
// })






//this function is the action (click) the event listener is waiting to hear before sending the alert
 // it's the idea of passing a function as an input so that it can be called at a later time.
