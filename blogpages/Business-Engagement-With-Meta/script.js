let swotItems = document.getElementsByClassName("swotItem");

for (let swotItem of swotItems) {
    swotItem.addEventListener("click", () => {
        swotItem.nextElementSibling.classList.toggle("hidden");
    });
}