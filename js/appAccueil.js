document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let submit_log = localStorage.getItem("user");
    let submit_session = sessionStorage.getItem("session");
    let el = document.getElementsByTagName("h2")[0];
    let el2 = document.getElementsByTagName("h2")[1];
    el.innerText += ` ${submit_log}`;
    el.style.color = "green";
    el2.innerText += ` ${submit_log}`;

    localStorage.clear();
    sessionStorage.clear();
});