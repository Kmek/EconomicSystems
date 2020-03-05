// JS for Navigation (goes with navigation.css)
// Creates navigation buttons so they don't have to be copied
// Horizontal Navigation Version

const navTitles = ["Traditional", "Market", "Command", "Mixed", "MLA"]

var navigationDiv = document.getElementById("navigation")

for (let i = 0; i < navTitles.length; i++) {
    let row = document.createElement("button")
    row.innerHTML = navTitles[i]

    row.setAttribute("onclick", ("callSlide(" + i + ")"))

    navigationDiv.appendChild(row)
}