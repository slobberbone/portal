var menuOrigCols = null;
var topOrigRows = null;
var onHoverModeMenu = false;
var onHoverModeTop = false;


var hideMenuWidth = "2";
var hideTopWidth = "2";	

window.onload = function(e){
	
	var hideMenu = PortalUtils.getCookie("hideMenu");
	var hideTop = PortalUtils.getCookie("hideTop");
	
	if(hideMenu === "true"){
		onHoverModeMenu = true;
		hideFrameMenu();
	}
	if(hideTop === "true"){
		onHoverModeTop = true;
		hideFrameTop();
	}

	$.getJSON("config/config.json", function(json) {

		var autoHideMenu = true;
		var autoHideTop = true;
		try {
			for (var i = 0; i < json["ui"].length; i++) {
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
	var side = document.getElementById("side");
	side.addEventListener("mouseover", autoShowFrameMenu);
	side.addEventListener("mouseleave", autoHideFrameMenu);
}

function autoHideFrameMenu() {
	if(onHoverModeMenu) {
		hideFrameMenu();
	}
		
}
function hideFrameMenu() {
    var frameset = document.getElementById("frameSetMenu");
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
	var top = document.getElementById("top");
	top.addEventListener("mouseover", autoShowFrameTop);
	top.addEventListener("mouseleave", autoHideFrameTop);
}

function autoHideFrameTop() {
	if(onHoverModeTop) {
		hideFrameTop();
	}
		
}
function hideFrameTop() {
    var frameset = document.getElementById("frameSetTop");
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
    var frameset = document.getElementById("frameSetSpinner");
    origRows = frameset.rows;
    var i = 70;
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


