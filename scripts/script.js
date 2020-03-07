// JavaScript for Economic Systems Website

// Constants
// var page = document.getElementById("page")
var page = document.getElementById("pageLayout")

/******************** Change Accent Color ********************/
// Print Color
// console.log(getComputedStyle(document.body).getPropertyValue('--accent'))

function changeAccent(color) {
    document.documentElement.style.setProperty('--accent', color)
}

// Load Info of Page into #page div
function loadPage(info) {
    page.height = "100%"
    // page.height = "0"
    // page.overflow = "auto"
    // page.innerHTML = ""

    // console.log(page.children)

    page.children[0].innerHTML = info.title
    page.children[1].setAttribute("src", info.img)
    page.children[2].innerHTML = info.desc

    page.children[4].innerHTML = info.q1
    page.children[6].innerHTML = info.q2
    page.children[8].innerHTML = info.q3

    page.children[10].innerHTML = ""
    for (let i = 0; i < info.positive.length; i++) {
        let bullet = document.createElement("li")
        bullet.innerHTML = info.positive[i]
        page.children[10].appendChild(bullet)
    }
    page.children[12].innerHTML = ""
    for (let i = 0; i < info.negative.length; i++) {
        let bullet = document.createElement("li")
        bullet.innerHTML = info.negative[i]
        page.children[12].appendChild(bullet)
    }

    page.children[14].innerHTML = info.example

    changeAccent(info.color)
}