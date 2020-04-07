
$(document).ready(function () {
     GetLatestRealaseInfo();
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function displayChromeExtension() {
  //document.getElementById("displayFirefoxExtensionDown").classList.toggle("hide");
  document.getElementById("displayChromeExtensionDown").classList.toggle("show");
}
function displayFirefoxExtension() {
  //document.getElementById("displayChromeExtensionDown").classList.toggle("hide");
  document.getElementById("displayFirefoxExtensionDown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function GetLatestRealaseInfo() {
	function compareToGithubVersion(localeVersion){
        	let latestVersion;
		let downloadURL;
		$.getJSON("https://api.github.com/repos/slobberbone/portal/tags").done(function(dataFromGithub){
			return dataFromGithub;
		}).then(function(lastRealase){
			latestVersion = lastRealase[0].name;
			let portalDownloadId = document.getElementById("portal-download");
			let portalDownloadImgId = document.getElementById("portal-download-img");
			let portalDownloadLinkId = document.getElementById("portal-download-link");
			portalDownloadLinkId.href=lastRealase[0].zipball_url;
			portalDownloadId.style.display="none";
			portalDownloadImgId.style.display="none";
			if(!localeVersion){
				localeVersion = "0.1";
			}
			if(latestVersion){
				if(localeVersion < latestVersion){
					portalDownloadId.style.display="block";
					portalDownloadImgId.style.display="block";
				}
			}

			return true;
		});
	}
	$.getJSON( "config/config.sample.json").done(function(json) {
		compareToGithubVersion(json["version"]);
	});
}
