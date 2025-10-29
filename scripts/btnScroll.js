let scrollBtns = document.getElementsByClassName("scrollBtn");

for (let scrollBtn of scrollBtns) {
    let anchor = document.getElementById(scrollBtn.id + "Anchor");
    scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: anchor.offsetTop - 100,
                behavior: "smooth"
        });
    });
}