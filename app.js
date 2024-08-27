const btn = document.querySelectorAll(".btn");
const body = document.querySelector("body")


btn.forEach((button)=>{
button.addEventListener("click",(event)=>{
if(event.target.id === "green"){
    body.style.background="green"
}
if(event.target.id === "yellow"){
    body.style.background="yellow"
}
if(event.target.id === "blue"){
    body.style.background="blue"
}
if(event.target.id === "black"){
    body.style.background="black"
}
if(event.target.id === "red"){
    body.style.background="red"
}
})
})