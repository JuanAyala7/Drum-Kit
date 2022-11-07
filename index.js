

document.querySelector("button").addEventListener("click", handleClick); //the event listener is what will be waiting to listen to what is selected (button)

function handleClick() { //this function is the action (click) the event listener is waiting to hear before sedning the alert
  alert("I got Clicked!");
}
