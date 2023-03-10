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


//-----------------------------------------------------------
//======================KEY PRESS============================
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if(e.key == "Enter"){
        ring();
    }
});

const ring = () =>{
    const audio = new Audio();
    audio.src = "./Enter.mp3";
    audio.play();
};



//-----------------------------------------------------------
//======================SCROLL EVENT=========================
const nav = document.querySelector("nav");
window.addEventListener('scroll', () => {
    if(window.scrollY > 120){
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});





//-----------------------------------------------------------
//======================FORM EVENTS==========================
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(cgv.checked){
        document.querySelector("form > div").innerHTML = `
            <h3>Pseudo : ${pseudo}</3>
            <h4>Langage pr??f??r?? : ${language}</h4>
        `;
    } else {
        alert("Veuillez accepter les CGV");
    }
});





//-----------------------------------------------------------
//======================LOAD EVENTS==========================
window.addEventListener("load", () => {
    console.log("Document Charg?? !");
});


//-----------------------------------------------------------
//=========================FOREACH===========================
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        console.log(e.target);
    });
});






//-----------------------------------------------------------
//==============addEventListener vs onclick==================
document.body.onclick = function () {
    console.log("Click !");
}

// Bubbling => fin (de base l'eventListener est en mode Bubbling)
document.body.addEventListener("click", () => {
    console.log("Click 1");
});

// Usecapture
document.body.addEventListener("click", () => {
    console.log("Click 2");
},true);





//-----------------------------------------------------------
//=================== STOP PROPAGATION=======================
questionContainer.addEventListener('click', (e) => {
    //alert("Test !");
    e.stopPropagation();
});














//-----------------------------------------------------------
//========================= BOM =============================
//console.log(window.innerHeight);
//console.log(window.scrollY);
//window.open("http://google.com", "cours js", "height=600, width=800");
// window.close();

//---- Events adoss??s ?? Window
// alert("hello");
// confirm
btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment vous tromper ?");
});

btn1.addEventListener("click", () => {
    let answer = prompt("Entrez votre nom !");
    questionContainer.innerHTML += "<h3> Bravo " + answer + " ! </h3>";
});

// Timer
setTimeout(() => {
    questionContainer.style.borderRadius = "300px";
}, 2000);

/*let interval = setInterval(() => {
    document.body.innerHTML += 
        "<div class='box'><h2>Nouvelle Boite !</h2></div>";
}, 1000);*/

document.body.addEventListener('click', () => {
    clearInterval(interval);
});

// Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);

// History
console.log(window.history);
//window.history.back();


//-----------------------------------------------------------
//========================= SET PROPERTY=====================
window.addEventListener("mousemove", (e) => {
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
});