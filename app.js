const lists = document.querySelectorAll("li")
console.log(lists)
const h1Section = document.querySelector("section h1")
const h2Section = document.querySelector("section h2")
const body = document.querySelector("body")


const removeClass = () => {
    for (let i = 0; i < lists.length; i++) {
        lists[i].classList.remove("active")
        console.log(lists[i])
    }
}
for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function () {
        removeClass()
        lists[i].classList.add("active")
        if (lists[i].querySelector(".home-icon")) {
            h1Section.innerText = "Home"
            h2Section.innerText = "Homepagega o'tdi."
            body.style.backgroundImage = "url('./teslaY.jpeg')"

        } else if (lists[i].querySelector(".about-icon")) {
            h1Section.innerText = "About"
        } else if (lists[i].querySelector(".work-icon")) {
            h1Section.innerText = "Work"
        } else {
            h1Section.innerText = "Message"
        }


    })
}