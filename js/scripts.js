/*-------------------
     Just some scripts that you just don't need. :P  
--------------------*/
// Menu
var InAnimationsMenu = document.getElementById("InAnimationsMenu"),
	OutAnimationsMenu = document.getElementById("OutAnimationsMenu"),
	InAnimations = document.getElementById("InAnimations"),
	OutAnimations = document.getElementById("OutAnimations"),
	Animation_Show = document.getElementById("animation-show"),
	Animation_Wrapper = document.getElementById("animation-wrapper"),
	timeoutHandle = window.setTimeout(function(){});

function ActiveMenu() {
	document.getElementsByClassName("ActiveMenu")[0].className =  "";
	this.className = "ActiveMenu";
	if (this.textContent.includes("In")) {
		InAnimations.className = "ActiveAnimations";
		OutAnimations.className = "";
	} else {
		InAnimations.className = "";
		OutAnimations.className = "ActiveAnimations";
	}
}
function finding_clicked_element(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target;
		change_active_aniamtion.call(clickedItem);
    }
    e.stopPropagation();
}
function change_active_aniamtion() {	
	var animation_name = this.textContent,
		vertical_adjustmentLeft = animation_name.includes("Left"),
		vertical_adjustmentRight = animation_name.includes("Right"),
		horizontal_adjustmentTop = animation_name.includes("Top"),
		horizontal_adjustmentBottom = animation_name.includes("Bottom");
		
	Animation_Show.className = "";
	window.clearTimeout(timeoutHandle);
	document.getElementsByClassName("active")[0].className =  "";
	this.className = "active";

	if(vertical_adjustmentLeft == true)	Animation_Wrapper.className = "perspective-origin-left";
	else if(vertical_adjustmentRight == true) Animation_Wrapper.className = "perspective-origin-right";
	else if(horizontal_adjustmentTop == true) Animation_Wrapper.className = "perspective-origin-top";
	else if(horizontal_adjustmentBottom == true) Animation_Wrapper.className = "perspective-origin-bottom";
	else Animation_Wrapper.className =  "";

	timeoutHandle = window.setTimeout(function(){Animation_Show.className = animation_name}, 1);;	
}

InAnimationsMenu.addEventListener("click",ActiveMenu);
OutAnimationsMenu.addEventListener("click",ActiveMenu);

InAnimations.addEventListener("click", finding_clicked_element);
OutAnimations.addEventListener("click", finding_clicked_element);









