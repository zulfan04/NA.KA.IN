document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("button");
	const text = document.getElementById("text");

	button.addEventListener("click", function () {
		text.classList.toggle("hidden");
	});
});
