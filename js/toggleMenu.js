window.onload = function(e){
	
	let hideMenu = PortalUtils.getCookie("hideMenu");
	if(hideMenu === "true"){
		document.getElementById("checkboxMenu").checked=true;
	} else {
		document.getElementById("checkboxMenu").checked=false;
	}
}
