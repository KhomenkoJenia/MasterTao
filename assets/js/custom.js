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
const Section = document.querySelectorAll("section");
const ContainerFluid = document.querySelectorAll("container-fluid");

ContainerFluid.forEach((item) => {
	const section = element.closest("section");

	if (section.classList.contains("first-screen")) {
		null;
	} else {
		section.closest("section").style.padding = "0 50px";
	}
});

const btnBox = document.querySelectorAll(".input-checkbox");

btnBox.forEach((item) => {
	item.closest(".col-md-6").classList.add("button-group");
});

document.getElementById("fileInput").onchange = function () {
	document.getElementById("file-name").innerHTML = this.files[0].name;
};
