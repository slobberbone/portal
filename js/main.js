window.onload = function(e){
	$.getJSON("config/config.json", function(json) {
		function addArea(map, entry, coords) {
			function loading(event) {
				parent.showLoader();
			}
      var area = document.createElement("area");
      area.href = json["main"][entry]["url"];
      area.target = json["main"][entry]["target"];
      area.shape = "circle";
      area.coords = coords;
      area.title = json["main"][entry]["label"];
			area.addEventListener("click",loading);
      map.appendChild(area);
		};
		var main_h1 = document.getElementById("main_h1");
		var main_image = document.getElementById("main_image");
		if(json["main"]) {
      var map = document.createElement("map");
      map.name = "main_map";
      map.id = "main_map";

      addArea(map,"chauffage_entry","188,300,45");
      addArea(map,"multimedia_entry","156,495,46");
      addArea(map,"securite_entry","157,691,45");
      addArea(map,"energie_entry","350,163,45");
      addArea(map,"surveillance_entry","846,161,45");
      addArea(map,"reseau_entry","598,100,63");
      addArea(map,"fichiers_entry","1008,300,46");
      addArea(map,"lumieres_entry","1040,494,46");
      addArea(map,"recyclage_entry","667,565,415");

      main_image.setAttribute('usemap', "#main_map");
			main_h1.appendChild(map);
		}
	});
};
