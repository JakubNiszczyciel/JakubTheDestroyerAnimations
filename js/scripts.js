/*-------------------
     Just some scripts that you just don't need. :P  
--------------------*/
// Menu
var InAnimations = document.getElementById("InAnimationsMenu");
var OutAnimations = document.getElementById("OutAnimationsMenu");

InAnimations.addEventListener("click", function(){
	InAnimations.setAttribute("class","ActiveMenu");
	OutAnimations.setAttribute("class",""); 
	document.getElementById("InAnimations").setAttribute("class","ActiveAnimations");
	document.getElementById("OutAnimations").setAttribute("class","");
})
OutAnimations.addEventListener("click", function(){
	InAnimations.setAttribute("class","");
	OutAnimations.setAttribute("class","ActiveMenu"); 
	document.getElementById("InAnimations").setAttribute("class","");
	document.getElementById("OutAnimations").setAttribute("class","ActiveAnimations");
})

var timeoutHandle = window.setTimeout(function(){document.getElementById("animation-show").setAttribute("class", "");}, 800);

function change_active_aniamtion(id_of_animation) {
	document.getElementById("animation-show").setAttribute("class", "");
	window.clearTimeout(timeoutHandle);
	var animation_name = document.getElementById(id_of_animation).textContent;
	document.getElementsByClassName("active")[0].setAttribute("class", "");
	document.getElementById(id_of_animation).setAttribute("class", "active");
	
	var vertical_adjustmentLeft = animation_name.includes("Left");
	var vertical_adjustmentRight = animation_name.includes("Right");
	var horizontal_adjustmentTop = animation_name.includes("Top");
	var horizontal_adjustmentBottom = animation_name.includes("Bottom");
	
	if(vertical_adjustmentLeft == true)	document.getElementById("animation-wrapper").setAttribute("class", "perspective-origin-left")
	else if(vertical_adjustmentRight == true) document.getElementById("animation-wrapper").setAttribute("class", "perspective-origin-right")
	else if(horizontal_adjustmentTop == true) document.getElementById("animation-wrapper").setAttribute("class", "perspective-origin-top")
	else if(horizontal_adjustmentBottom == true) document.getElementById("animation-wrapper").setAttribute("class", "perspective-origin-bottom")
	else document.getElementById("animation-wrapper").setAttribute("class", "")
	
	timeoutHandle = window.setTimeout(function(){document.getElementById("animation-show").setAttribute("class", id_of_animation);}, 1);;
}
// InAnimations
document.getElementById("InFadeLeft").addEventListener("click", function () {change_active_aniamtion("InFadeLeft");});
document.getElementById("InFadeRight").addEventListener("click", function () {change_active_aniamtion("InFadeRight");});
document.getElementById("InFadeTop").addEventListener("click", function () {change_active_aniamtion("InFadeTop");});
document.getElementById("InFadeBottom").addEventListener("click", function () {change_active_aniamtion("InFadeBottom");});
document.getElementById("InFadeBounceLeft").addEventListener("click", function () {change_active_aniamtion("InFadeBounceLeft");});
document.getElementById("InFadeBounceRight").addEventListener("click", function () {change_active_aniamtion("InFadeBounceRight");});
document.getElementById("InFadeBounceTop").addEventListener("click", function () {change_active_aniamtion("InFadeBounceTop");});
document.getElementById("InFadeBounceBottom").addEventListener("click", function () {change_active_aniamtion("InFadeBounceBottom");});
document.getElementById("InFadeRotateLeftTop").addEventListener("click", function () {change_active_aniamtion("InFadeRotateLeftTop");});
document.getElementById("InFadeRotateLeftBottom").addEventListener("click", function () {change_active_aniamtion("InFadeRotateLeftBottom");});
document.getElementById("InFadeRotateRightTop").addEventListener("click", function () {change_active_aniamtion("InFadeRotateRightTop");});
document.getElementById("InFadeRotateRightBottom").addEventListener("click", function () {change_active_aniamtion("InFadeRotateRightBottom");});
document.getElementById("InRotate3dLeftBack").addEventListener("click", function () {change_active_aniamtion("InRotate3dLeftBack");});
document.getElementById("InRotate3dRightBack").addEventListener("click", function () {change_active_aniamtion("InRotate3dRightBack");});
document.getElementById("InRotate3dTopBack").addEventListener("click", function () {change_active_aniamtion("InRotate3dTopBack");});
document.getElementById("InRotate3dBottomBack").addEventListener("click", function () {change_active_aniamtion("InRotate3dBottomBack");});
document.getElementById("InRotate3dLeftFront").addEventListener("click", function () {change_active_aniamtion("InRotate3dLeftFront");});
document.getElementById("InRotate3dRightFront").addEventListener("click", function () {change_active_aniamtion("InRotate3dRightFront");});
document.getElementById("InRotate3dTopFront").addEventListener("click", function () {change_active_aniamtion("InRotate3dTopFront");});
document.getElementById("InRotate3dBottomFront").addEventListener("click", function () {change_active_aniamtion("InRotate3dBottomFront");});

// OutAnimations
document.getElementById("OutFadeLeft").addEventListener("click", function () {change_active_aniamtion("OutFadeLeft");});
document.getElementById("OutFadeRight").addEventListener("click", function () {change_active_aniamtion("OutFadeRight");});
document.getElementById("OutFadeTop").addEventListener("click", function () {change_active_aniamtion("OutFadeTop");});
document.getElementById("OutFadeBottom").addEventListener("click", function () {change_active_aniamtion("OutFadeBottom");});
document.getElementById("OutFadeRotateLeftTop").addEventListener("click", function () {change_active_aniamtion("OutFadeRotateLeftTop");});
document.getElementById("OutFadeRotateLeftBottom").addEventListener("click", function () {change_active_aniamtion("OutFadeRotateLeftBottom");});
document.getElementById("OutFadeRotateRightTop").addEventListener("click", function () {change_active_aniamtion("OutFadeRotateRightTop");});
document.getElementById("OutFadeRotateRightBottom").addEventListener("click", function () {change_active_aniamtion("OutFadeRotateRightBottom");});
document.getElementById("OutRotate3dLeftBack").addEventListener("click", function () {change_active_aniamtion("OutRotate3dLeftBack");});
document.getElementById("OutRotate3dRightBack").addEventListener("click", function () {change_active_aniamtion("OutRotate3dRightBack");});
document.getElementById("OutRotate3dTopBack").addEventListener("click", function () {change_active_aniamtion("OutRotate3dTopBack");});
document.getElementById("OutRotate3dBottomBack").addEventListener("click", function () {change_active_aniamtion("OutRotate3dBottomBack");});
document.getElementById("OutRotate3dLeftFront").addEventListener("click", function () {change_active_aniamtion("OutRotate3dLeftFront");});
document.getElementById("OutRotate3dRightFront").addEventListener("click", function () {change_active_aniamtion("OutRotate3dRightFront");});
document.getElementById("OutRotate3dTopFront").addEventListener("click", function () {change_active_aniamtion("OutRotate3dTopFront");});
document.getElementById("OutRotate3dBottomFront").addEventListener("click", function () {change_active_aniamtion("OutRotate3dBottomFront");});









