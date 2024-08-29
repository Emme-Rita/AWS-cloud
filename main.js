const hamburger = document.querySelector(".hamburger")
const nav_links = document.querySelector(".nav_link")
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    nav_links.classList.toggle("active")
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })


//   count down timer

var countdowndate = new Date("Sept 1, 2024 00:00:00").getTime()
var x = setInterval(function(){
    var now = new Date().getTime()
    var distance = countdowndate - now


    var hours = (Math.floor(distance / (1000 * 60 * 60)) + "h")
    if(hours < 10){ hours = "0" + hours}


    var minutes = (Math.floor((distance % (1000 *60 * 60)) / (1000 * 60)) + "m")
    if(minutes < 10){ minutes = "0" + minutes}


    var seconds = (Math.floor((distance % (1000 * 60) / 1000 )) + "s")
    if(seconds < 10){ seconds = "0" + seconds}

    document.getElementById("hour").innerHTML = hours
    document.getElementById("minute").innerHTML = minutes
    document.getElementById("second").innerHTML = seconds

}, 1000)