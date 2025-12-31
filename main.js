let navMenu = document.getElementById("navmenu")
let hambugger = document.querySelector(".hambugger")
let navContainer = document.querySelector("nav")
let year = document.querySelector(".year")


const actionBtn = document.querySelectorAll(".action-btn button")
const filterCard = document.querySelectorAll(".cardContainer .card")

hambugger.addEventListener("click", () => {
    hambugger.classList.toggle("active")
    navMenu.classList.toggle("active")
    navContainer.classList.toggle("active")
})

let navLinks = document.querySelectorAll(".nav-items")
navLinks.forEach(n => n.addEventListener("click", () => {
    hambugger.classList.remove("active")
    navMenu.classList.remove("active")
    navContainer.classList.remove("active")
}))

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")

    filterCard.forEach(card => {
        card.classList.add("hide")
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide")
        }
    }) 
}

year.textContent = new Date().getFullYear()

actionBtn.forEach(button => button.addEventListener("click", filterCards))
