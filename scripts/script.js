let topBtn = document.getElementById("topBtn");
let contactBtn = document.getElementById("contactBtn");
let footerBtn = document.getElementById("footerBtn");

let contact = document.getElementById("contact");

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
contactBtn.addEventListener("click", () => {
    window.scrollTo({
        top: contact.offsetTop,
        behavior: "smooth"
    });
});
footerBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});