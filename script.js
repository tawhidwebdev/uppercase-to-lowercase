let input = document.querySelector(".inputbox");
let btn1  = document.querySelector(".btn1");
let btn2  = document.querySelector(".btn2");
let btn3  = document.querySelector(".btn3");
let btn4  = document.querySelector(".btn4");
let btn5  = document.querySelector(".btn5");
let btn6  = document.querySelector(".btn6");
let emty = document.querySelector(".emty")

btn1.addEventListener("click",function () {
    emty.innerHTML = input.value.toUpperCase()
})

btn2.addEventListener("click",function () {
    emty.innerHTML = input.value.toLowerCase()
})

btn3.addEventListener("click",function () {
    emty.innerHTML = input.value.repeat(10)
})
btn4.addEventListener("click",function () {
    emty.innerHTML = input.value.repeat(100)
})
btn5.addEventListener("click",function () {
    emty.innerHTML = input.value.repeat(1000)
})
btn6.addEventListener("click",function () {
   emty.innerHTML = "";
   input.value = "";
})