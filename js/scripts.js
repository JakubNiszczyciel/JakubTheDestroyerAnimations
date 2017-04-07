/*-------------------
     MOJE SKRYPTY  
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

// OutAnimations
document.getElementById("FadeOutLeft").addEventListener("click", function () {change_active_aniamtion("FadeOutLeft");});
document.getElementById("FadeOutRight").addEventListener("click", function () {change_active_aniamtion("FadeOutRight");});
document.getElementById("FadeOutTop").addEventListener("click", function () {change_active_aniamtion("FadeOutTop");});
document.getElementById("FadeOutBottom").addEventListener("click", function () {change_active_aniamtion("FadeOutBottom");});