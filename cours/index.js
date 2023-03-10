//======================SELECTEURS============================
// document.querySelector("h4").style.background="yellow";
// const baliseHTML = document.querySelector("h4");



//------------------------------------------------------------
//======================CLICK EVENT===========================
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

questionContainer.addEventListener('click', () => {
    //questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.color = 'green';
});

btn2.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.color = 'red';
});




//------------------------------------------------------------
//======================MOUSE EVENT===========================
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.top = e.pageY + "px";
    mousemove.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.border = "3px solid red";
});

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.border = "3px solid black";
});

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)";
});
