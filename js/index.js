// Your code goes here
//EVENT PROPAGATION STOPPED
const logo = document.querySelector(".logo-heading");  //1
logo.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === 'blue'){
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'blue';
    }
    event.stopPropagation();
})

const header = document.querySelector(".main-navigation");
header.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === 'red'){
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'red';
    }
})

const img = document.querySelector("img"); //2
img.addEventListener('mouseover', (event)=>{
    if (event.target.style.border === "thick solid blue") {
        event.target.style.border = "none";
    } else {
        event.target.style.border = "thick solid blue";
    }
    
})

const words = document.querySelectorAll("p"); //3
words.forEach((word) =>{
    word.addEventListener('dblclick', (event) => {
        if (event.target.style.color === "green"){
            event.target.style.color = "black";
        } else {
            event.target.style.color = "green";
        }
    })
})

const doc = document.querySelector(".text-content"); //4
doc.addEventListener('wheel', (event) =>{
    if (event.target.style.backgroundColor === 'red') {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'red';
    }
    event.stopPropagation();
})

const boat = document.querySelector(".boat"); //5
boat.addEventListener('auxclick', (event) => {
    alert("You right clicked on boat");
})

const htmlDoc = document.querySelector("html"); //6
htmlDoc.addEventListener('keydown', (event) => {
    if (event.key === "a"){
      alert("You pressed a on the keyboard");  
    }
})

const firstP = document.querySelector("p"); //7
firstP.addEventListener('copy', (event) => {
    event.target.style.color = "yellow";
})

const select = document.querySelector(".bottom"); //8
select.addEventListener('select', (event) =>{
    alert("You selected text");
})

const form = document.querySelector('form'); //9
form.addEventListener('focus', (event) => {
    event.target.style.background = 'purple';    
}, true);
  
form.addEventListener('blur', (event) => {  //10
    event.target.style.background = 'white';    
}, true);




//PREVENT Default 
const links = document.querySelectorAll("a");
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
}) 


