console.info("Hello from the file");
document.getElementById("myHeading").innerHTML = "Ayan Tanveer";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
document.querySelector("nav ul li a")
        .setAttribute("href", "https://www.google.co.uk")
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length; i++) {
   colourButtons[i].style.backgroundColor = "lightGrey";
}

document.getElementById("myTestBtn").addEventListener("click", function () {
console.info("hi i was clicked");
});

//colour picker
let redBtn = document.querySelector(".red");
redBtn.addEventListener("click", function () {
   document.body.setAttribute("class", "redBack");
})

let blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", function () {
   document.body.setAttribute("class", "blueBack");
})

let greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", function () {
   document.body.setAttribute("class", "greenBack");
})

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", function () {
   document.body.removeAttribute("class");
})


//image rotator
let imageAr = [
   'images/view1.jpg',
   'images/view2.jpg',
   'images/view3.jpg',
   'images/view4.jpg',
   'images/view5.jpg',
   'images/view6.jpg'
 ];
 let imageRotator = document.getElementById("myImages");
 let imageCounter = 0;
 function chgImage() { 
   if(imageCounter === 6){
      imageCounter = 0;
   }

   imageRotator.setAttribute("src", imageAr[imageCounter]);
   imageCounter++;
   console.info(imageCounter);
 }
 setInterval(chgImage, 1000
 );