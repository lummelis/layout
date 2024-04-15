// Fancybox Configuration
    $('[data-fancybox="gallery"]').fancybox({
    buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
    ],
    loop: false,
    protect: true
});

// Text reveal

let infotext = [false, false, false, false]
const infoTextArray = document.querySelectorAll(".info-text")
const imgContainerArray = document.querySelectorAll(".img-container-text-reveal")
const textRevealArray = document.querySelectorAll(".text-reveal")


for (let i = 0; i < infoTextArray.length; i++) {
    infoTextArray[i].addEventListener("click", () => {
        infotext[i] = !infotext[i]
        if (infotext[i]) {
            infoTextArray[i].innerText = "« return"
        } else {
            infoTextArray[i].innerText = "course »"
        }
        imgContainerArray[i].classList.toggle("display-none-text-reveal")
        textRevealArray[i].classList.toggle("display-none-text-reveal")
    })
}

const body = document.body; 
const loader = document.querySelector(".loader");
const loaderContainer = document.querySelector(".loader-container");


window.addEventListener("load", () => {
    setTimeout(() => {
        loaderContainer.classList.add("loader-container-animation")
        loaderContainer.addEventListener("animationend", () => {
        loader.classList.add("loader-hidden");
            document.querySelector(".slide-up").classList.add("slide-up-animation")
            document.querySelector(".slide-up2").classList.add("slide-up-animation2")
            document.querySelector(".slide-up3").classList.add("slide-up-animation3")
            document.querySelector(".slide-up4").classList.add("slide-up-animation4")
            loader.addEventListener("transitionend", () => {   
            loader.remove()
                })
        })
    }, "1500")

  })