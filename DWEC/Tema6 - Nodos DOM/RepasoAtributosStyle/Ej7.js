addEventListener("load", inicio, false);

function inicio() {
    let divs = document.querySelectorAll("div");

    for (const div of divs) {
        div.addEventListener("click", function () {
            document.body.style.backgroundColor = window.getComputedStyle(div, null).backgroundColor;
        })
    }
}