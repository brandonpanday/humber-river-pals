let burgerBtn = document.querySelector("#hamburger-icon");
burgerBtn.addEventListener("click", showMenu, false);

let slidingNav = document.querySelector("#sliding-nav");
slidingNav.addEventListener("click", hideMenu, false);

function showMenu(e) {
    slidingNav.classList.add("show");

    document.body.style.overflow = "hidden";
}

function hideMenu(e) {
    slidingNav.classList.remove("show");
	e.stopPropagation();

    document.body.style.overflow = "auto";
}		