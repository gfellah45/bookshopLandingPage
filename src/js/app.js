const nav = document.querySelector(".navigator");
const hambuger = document.querySelector(".bars");

hambuger.addEventListener("click", () => {
	nav.classList.toggle("show");
	hambuger.classList.toggle("change");
});

window.addEventListener("scroll", () => {
	let scrollPos = window.scrollY;

	if (scrollPos > 90) {
		nav.classList.add("handle-scroll");
	} else {
		nav.classList.remove("handle-scroll");
	}
});
