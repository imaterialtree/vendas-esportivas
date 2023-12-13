var header = document.getElementById("navbarToggleExternalContent")
var toggle = false;

function acessibilidade() {
    toggle = !toggle;
    if (toggle) {
        header.classList.remove("bg-dark")
        header.classList.add("bg-warning")
    } else {
        header.classList.add("bg-dark")
    }

}