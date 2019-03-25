window.onload = function(e){
	
	var hideMenu = PortalUtils.getCookie("hideMenu");
	if(hideMenu === "true"){
		document.getElementById("checkboxMenu").checked=true;
	} else {
		document.getElementById("checkboxMenu").checked=false;
	}
}
