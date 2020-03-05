// JavaScript for Economic Systems Website

// Constants
var page = document.getElementById("page")

/******************** Change Accent Color ********************/
// Print Color
// console.log(getComputedStyle(document.body).getPropertyValue('--accent'))

function changeAccent(color) {
    document.documentElement.style.setProperty('--accent', color)
}

// Load Info of Page into #page div
function loadPage(info) {
    // page.innerHTML = ""

    let title = document.createElement("h2")
    title.innerHTML = info.title
    title.setAttribute("class", "transition")
    page.appendChild(title)

    let img = document.createElement("img")
    img.setAttribute("src", info.img)
    page.appendChild(img)

    changeAccent(info.color)
}