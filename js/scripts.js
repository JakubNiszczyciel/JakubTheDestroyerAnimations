/*-------------------
     Just some scripts that you just don't need. :P  
--------------------*/
var timeoutHandle = window.setTimeout(function(){document.getElementById("animation-show").setAttribute("class", "");}, 800);

function change_active_aniamtion(id_of_animation) {
	document.getElementById("animation-show").setAttribute("class", "");
	window.clearTimeout(timeoutHandle);
	var animation_name = document.getElementById(id_of_animation).textContent;
	document.getElementsByClassName("active")[0].setAttribute("class", "");
	document.getElementById(id_of_animation).setAttribute("class", "active");
	
	timeoutHandle = window.setTimeout(function(){document.getElementById("animation-show").setAttribute("class", id_of_animation);}, 1);;
}
// InAnimations
document.getElementById("FadeInLeft").addEventListener("click", function () {change_active_aniamtion("FadeInLeft");});
document.getElementById("FadeInRight").addEventListener("click", function () {change_active_aniamtion("FadeInRight");});
document.getElementById("FadeInTop").addEventListener("click", function () {change_active_aniamtion("FadeInTop");});
document.getElementById("FadeInBottom").addEventListener("click", function () {change_active_aniamtion("FadeInBottom");});
document.getElementById("FadeInBounceLeft").addEventListener("click", function () {change_active_aniamtion("FadeInBounceLeft");});
document.getElementById("FadeInBounceRight").addEventListener("click", function () {change_active_aniamtion("FadeInBounceRight");});
document.getElementById("FadeInBounceTop").addEventListener("click", function () {change_active_aniamtion("FadeInBounceTop");});
document.getElementById("FadeInBounceBottom").addEventListener("click", function () {change_active_aniamtion("FadeInBounceBottom");});
document.getElementById("FadeInRotateLeftTop").addEventListener("click", function () {change_active_aniamtion("FadeInRotateLeftTop");});
document.getElementById("FadeInRotateLeftBottom").addEventListener("click", function () {change_active_aniamtion("FadeInRotateLeftBottom");});
document.getElementById("FadeInRotateRightTop").addEventListener("click", function () {change_active_aniamtion("FadeInRotateRightTop");});
document.getElementById("FadeInRotateRightBottom").addEventListener("click", function () {change_active_aniamtion("FadeInRotateRightBottom");});

// OutAnimations
document.getElementById("FadeOutLeft").addEventListener("click", function () {change_active_aniamtion("FadeOutLeft");});
document.getElementById("FadeOutRight").addEventListener("click", function () {change_active_aniamtion("FadeOutRight");});
document.getElementById("FadeOutTop").addEventListener("click", function () {change_active_aniamtion("FadeOutTop");});
document.getElementById("FadeOutBottom").addEventListener("click", function () {change_active_aniamtion("FadeOutBottom");});
document.getElementById("FadeOutRotateLeftTop").addEventListener("click", function () {change_active_aniamtion("FadeOutRotateLeftTop");});
document.getElementById("FadeOutRotateLeftBottom").addEventListener("click", function () {change_active_aniamtion("FadeOutRotateLeftBottom");});
document.getElementById("FadeOutRotateRightTop").addEventListener("click", function () {change_active_aniamtion("FadeOutRotateRightTop");});
document.getElementById("FadeOutRotateRightBottom").addEventListener("click", function () {change_active_aniamtion("FadeOutRotateRightBottom");});









