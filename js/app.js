document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, warning, email, password;
    expr = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    warning = document.querySelector(".form p");
    email = document.getElementsByTagName("input")[0].value;
    password = document.getElementsByTagName("input")[1].value;
    btn = document.getElementsByTagName("input")[2];
    /* evenement */
    btn.addEventListener("click", e => {
        e.preventDefault();
        formActive();
    });
    let formActive = () => {

        email = document.getElementsByTagName("input")[0].value;
        password = document.getElementsByTagName("input")[1].value;
        submit = document.getElementsByTagName("input")[2].value;

        if (email && '@' && password) {
            warning.classList.add("success");
            warning.classList.remove("error");
            warning.innerText = "vous etes logué";
            localStorage.setItem("user", email); //stocker le login
            sessionStorage.setItem("user", "sessionid");
            document.location.assign("accueil.html");
        } else if (password) {
            warning.classList.add("error");
            warning.innerText = "Mail invalide";
            warning.classList.remove("success");
        } else if (email) {
            warning.classList.add("error");
            warning.innerText = "Mot de passe invalide";
            warning.classList.remove("success");
        } else {
            warning.classList.add("error");
            warning.innerText = "Mail ou mot de passe incorrecte";
            warning.classList.remove("success");
        };
    };
});