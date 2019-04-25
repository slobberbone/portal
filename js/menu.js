window.onload = function(e){
	$.getJSON("config/config.json", function(json) {
		function loading(event) {
			parent.showLoader();
		}
		var menu = document.getElementById("menu");
		for (var i = 0; i < json["menu"].length; i++) {
			var ul = document.createElement("ul");
			var h2 = document.createElement("h2");
			var title = document.createTextNode(json["menu"][i]["label"]);
			h2.appendChild(title);
			menu.appendChild(h2);
			for (var j = 0; j < json["menu"][i]["entries"].length; j++) {
				var li = document.createElement("li");
				if(j%2 == 0){
					li.className = "menuli_style1 hvr-underline-from-center";
				} else {
					li.className = "menuli_style2 hvr-underline-from-center";
				}
				var a = document.createElement("a");
				a.href = json["menu"][i]["entries"][j]["url"];
				a.target = json["menu"][i]["entries"][j]["target"];
				a.addEventListener("click",loading);
				var text = document.createTextNode(json["menu"][i]["entries"][j]["label"]);
				a.appendChild(text);
				li.appendChild(a);
				ul.appendChild(li);
			}
			menu.appendChild(ul);
		}
	});
};

$(document).ready(function() {
	var heads = $("h2");
	heads.css("cursor", "pointer");
	heads.prepend('<img src="images/interface/menu_less.gif" alt="" />');
	heads.click(function() {
		$("img", this).attr("src", function(i, src) {
			return src == "images/interface/menu_more.gif" ? "images/interface/menu_less.gif" : "images/interface/menu_more.gif";
		});
		$(this).next().slideToggle();
	});
	var link = $("div#menu ul li a");
	link.on("mouseenter", function() {
		$(this).parent().stop();
		$(this).parent().animate({"padding-left": "20px"}, 200);
	});
	link.on("mouseleave", function() {
		$(this).parent().stop();
		$(this).parent().animate({"padding-left": "10px"}, 200);
	});
});

$('button').toggle(
	function() {
	    $('#menu').css('left', '0')
	}, function() {
	    $('#menu').css('left', '200px')
	}
);
