addEventListener("load", inicio, false);

function inicio() {
    document.querySelector("input").addEventListener("click", function () {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "js.js", true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                eval(xhr.responseText);
            }
        }

    }, false);
}