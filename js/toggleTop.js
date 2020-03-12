window.onload = function(e){
	
	let hideTop = PortalUtils.getCookie("hideTop");
	if(hideTop === "true"){
		document.getElementById("checkboxTop").checked=true;
	} else {
		document.getElementById("checkboxTop").checked=false;
	}
}
