addEventListener("load", inicio, false);

function inicio() {
    let no = document.getElementById("no");
    let si = document.getElementById("si");
    no.addEventListener("mouseenter", function () {
        let x, y;
        [x, y] = randomXY();
        no.setAttribute("style", `left:${x}px; top:${y}px;width: 60px; height: 30px; position: absolute`);
    });
    no.addEventListener("click", function () {
        alert("MAL!!!");
    });
    si.addEventListener("click", function () {
        alert("Bien dicho!")
    })
}

function randomXY() {
    let x, y;
    x = Math.round(Math.random()*(window.innerWidth-60));
    y = Math.round(Math.random()*(window.innerHeight-30));
    return [x, y];
}