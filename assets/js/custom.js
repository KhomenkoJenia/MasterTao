const elementSection = document.querySelectorAll("section");
const containerFluid = document.querySelectorAll(".container-fluid");

containerFluid.forEach((item) => {
	const sectionHasFluid = item.closest("section");

	if (!sectionHasFluid.classList.contains("first-screen")) {
		sectionHasFluid.closest("section").style.padding = "0 50px";
	}
});

$(document).ready(function () {
	$(".banner").slick({
		dots: true,
		arrows: true,
		appendArrows: ".banner-nav",
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false,
				},
			},
		],
	});
});

const btnBox = document.querySelectorAll(".input-checkbox");

btnBox.forEach((item) => {
	item.closest(".col-md-6").classList.add("button-group");
});

document.getElementById("fileInput").onchange = function () {
	document.getElementById("file-name").innerHTML = this.files[0].name;
};
