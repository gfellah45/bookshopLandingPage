const nav = document.querySelector(".navigator");
const hambuger = document.querySelector(".bars");
console.log(nav, hambuger);

hambuger.addEventListener("click", () => {
	nav.classList.toggle("show");
	hambuger.classList.toggle("change");
});
