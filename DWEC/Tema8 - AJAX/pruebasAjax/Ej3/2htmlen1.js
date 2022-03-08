addEventListener("load", inicio, false);

function inicio() {
    let enlaces = document.querySelectorAll("a");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener("click", function (e) {
            let url;
            e.preventDefault();
            if (i === 0) {
                url = "html1.html";
            } else {
                url = "html2.html";
            }
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.send(null);
            xhr.onreadystatechange = cargarTxt;

            function cargarTxt() {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    document.querySelector("div").innerHTML = xhr.responseText;
                } else {
                    document.querySelector("div").innerHTML = "ERROR " + xhr.status;
                }
            }
        })
    }
}