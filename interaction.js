const button =
document.querySelector("#button");

const message =
document.querySelector("#message");

function changeMessage(){
    message.textContent = "You clicked the button!";
    message.style.backgroundColor = "yellow"; 
}
    

button.addEventListener("click", changeMessage);



