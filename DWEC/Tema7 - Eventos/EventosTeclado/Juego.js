addEventListener("load", inicio, false);

function inicio() {
    let x = 900;
    let y = 400;
    let tamano = 50;
    let personaje = document.images[0];
    document.body.addEventListener("keydown", function (e) {
        if (e.keyCode === 38 && y > 0) {
            y-= 5;
            personaje.style.top = `${y}px`;
            personaje.src = "arriba.png";
        } else if (e.keyCode === 40 && y < 750) {
            y+=5;
            personaje.style.top = `${y}px`;
            personaje.src = "abajo.png";
        } else if (e.keyCode === 37 && x > 0) {
            x-=5;
            personaje.style.left = `${x}px`;
            personaje.src = "izq.png";
        } else if (e.keyCode === 39 && x < 1870) {
            x+=5;
            personaje.style.left = `${x}px`;
            personaje.src = "dcha.png";
        }

        if (e.keyCode === 112 && e.altKey) {
            tamano -= 5;
            personaje.style.height = `${tamano}px`;
            personaje.style.width = `${tamano}px`;
        } else if(e.keyCode === 112){
            tamano += 5;
            personaje.style.height = `${tamano}px`;
            personaje.style.width = `${tamano}px`;
        }
        if (e.keyCode === 32) {
            personaje.src = "abajo.png";
            y-= 20;
            personaje.style.top = `${y}px`;
            setTimeout(function() {
                y+=20;
                personaje.style.top = `${y}px`;
            }, 300);
        }
        if (x <= 250 && x >= 150 && y <= 550 && y >= 450) {
            let cañonazo = setInterval(function () {
                document.querySelector(".cañon").src = "explosion.png";
                x+=60;
                personaje.style.left = `${x}px`;
                if (x >= 1800) {
                    clearInterval(cañonazo);
                    document.querySelector(".cañon").src = "cañon.png";
                }
            }, 100)
        }
    });
    document.body.addEventListener("click", function () {
        let pikachu = document.createElement("img");
        pikachu.className = "pikachu";
        pikachu.src = "pikachu.png";
        pikachu.style.height = "50px";
        pikachu.style.width = "50px";
        document.querySelector(".marco").appendChild(pikachu);
    })
}