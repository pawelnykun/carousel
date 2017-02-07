$(function() {
	var carouselList = $('#carousel ul');

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function changeSlide() {
		carouselList.animate({'marginLeft':-470}, 500, moveFirstSlide);
	}

	carouselList.setInterval(changeSlide, 3000);
})