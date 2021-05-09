//عمل الخانة اليسار عند الضغط 
// document.querySelector(".toggle-settings .fa-gear").onclick = function () {

//     this.classList.toggle("fa-spin");

    
//     document.querySelector(".settings-box").classList.toggle("open");
// };






//جعل الصور تتغير 
let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.png","02.png", "03.png"];

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
    landingPage.style.backgroundImage = 'url("img/'+ imgsArray[randomNumber] + '")';
}, 10000);