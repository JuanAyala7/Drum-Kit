

document.querySelector("button").addEventListener("click", handleClick); //the event listener is what will be waiting to listen to what is selected (button)

function handleClick() { //this function is the action (click) the event listener is waiting to hear before sending the alert
  alert("I got Clicked!"); // it's the idea of passing a function as an input so that it can be called at a later time.
}
