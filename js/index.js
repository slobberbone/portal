let menuOrigCols = null;
let topOrigRows = null;
let onHoverModeMenu = false;
let onHoverModeTop = false;


let hideMenuWidth = "2";
let hideTopWidth = "2";

window.onload = function(e){
	
	let hideMenu = PortalUtils.getCookie("hideMenu");
	let hideTop = PortalUtils.getCookie("hideTop");
	
	if(hideMenu === "true"){
		onHoverModeMenu = true;
		hideFrameMenu();
	}
	if(hideTop === "true"){
		onHoverModeTop = true;
		hideFrameTop();
	}

	$.getJSON("config/config.json", function(json) {

		let autoHideMenu = true;
		let autoHideTop = true;
		try {
			for (let i = 0; i < json["ui"].length; i++) {
				if(json["ui"][i]["autoHideMenu"] === "false"){
					autoHideMenu = false;
				}
				if(json["ui"][i]["autoHideTop"] === "false"){
					autoHideTop = false;
				}
				if(json["ui"][i]["hideMenuWidth"]){
					hideMenuWidth = json["ui"][i]["hideMenuWidth"];
				}
			}
		} catch (e) {
			
		}

		if(autoHideMenu){
			setTimeout(autoMenu,500);
		}
		if(autoHideTop){
			setTimeout(autoTop,500);
		}
		setTimeout(hideMenuWidth,500);
		setTimeout(hideTopWidth,500);
	});
};

// #### Side menu management ####
function autoMenu(event) {
	let side = document.getElementById("side");
	side.addEventListener("mouseover", autoShowFrameMenu);
	side.addEventListener("mouseleave", autoHideFrameMenu);
}

function autoHideFrameMenu() {
	if(onHoverModeMenu) {
		hideFrameMenu();
	}
		
}
function hideFrameMenu() {
    let frameset = document.getElementById("frameSetMenu");
    menuOrigCols = frameset.cols;
    frameset.cols = hideMenuWidth + ",*";
}

function autoShowFrameMenu() {
	if(onHoverModeMenu) {
		showFrameMenu();
	}
}
function showFrameMenu() {
    document.getElementById("frameSetMenu").cols = menuOrigCols;
    menuOrigCols = null;
}

// #### Top bar management ####

function autoTop(event) {
	let top = document.getElementById("top");
	top.addEventListener("mouseover", autoShowFrameTop);
	top.addEventListener("mouseleave", autoHideFrameTop);
}

function autoHideFrameTop() {
	if(onHoverModeTop) {
		hideFrameTop();
	}
		
}
function hideFrameTop() {
    let frameset = document.getElementById("frameSetTop");
    topOrigRows = frameset.rows;
    frameset.rows = hideTopWidth + ",*";
}

function autoShowFrameTop() {
	if(onHoverModeTop) {
		showFrameTop();
	}
}
function showFrameTop() {
    document.getElementById("frameSetTop").rows = topOrigRows;
    topOrigRows = null;
}

// ### Loading spinner management ###

function hideFrameSpinner() {
    let frameset = document.getElementById("frameSetSpinner");
    origRows = frameset.rows;
    let i = 70;
    while(i>0){
	i--;
	sleep(500).then(changeSpinnerSize(i));
    }
}

function showFrameSpinner() {
    document.getElementById("frameSetSpinner").rows = "26,70,*";
}
function hideLoader() {
	document.getElementById('main').onload = function() {
		hideFrameSpinner();
	};
};

function showLoader() {
   showFrameSpinner();
};

function changeSpinnerSize(i) {
	document.getElementById("frameSetSpinner").rows = "26,"+i+",*";
}
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// #### Communication with other frameset ####

function receiveMessage(event)
{
	if(event.data === "toggleMenu clicked"){
	  if(menuOrigCols!=null){
	   onHoverModeMenu = false;
	   PortalUtils.createCookie("hideMenu", "false", 1);
	   showFrameMenu();
	  } else {
	   onHoverModeMenu = true;
	   PortalUtils.createCookie("hideMenu", "true", 1);
	   hideFrameMenu();
	  }
	}
	if(event.data === "toggleTop clicked"){
	  if(topOrigRows!=null){
	   onHoverModeTop = false;
	   PortalUtils.createCookie("hideTop", "false", 1);
	   showFrameTop();
	  } else {
	   PortalUtils.createCookie("hideTop", "true", 1);
	   onHoverModeTop = true;
	   hideFrameTop();
	  }
	}
}

addEventListener("message", receiveMessage, false);


