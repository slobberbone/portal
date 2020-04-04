window.onload = function(e){
	$.getJSON("config/config.json", function(json) {
		function loading(event) {
			parent.showLoader();
		}
		let menu = document.getElementById("menu");
		for (let i = 0; i < json["menu"].length; i++) {
			let ul = document.createElement("ul");
			let h2 = document.createElement("h2");
			let title = document.createTextNode(json["menu"][i]["label"]);
			h2.appendChild(title);
			menu.appendChild(h2);
			for (let j = 0; j < json["menu"][i]["entries"].length; j++) {
				let li = document.createElement("li");
				if(j%2 == 0){
					li.className = "menuli_style1 hvr-underline-from-center";
				} else {
					li.className = "menuli_style2 hvr-underline-from-center";
				}
				let a = document.createElement("a");
				a.href = json["menu"][i]["entries"][j]["url"];
				a.target = json["menu"][i]["entries"][j]["target"];
				a.style.whiteSpace = "nowrap";
				a.addEventListener("click",loading);
				let text = document.createTextNode(json["menu"][i]["entries"][j]["label"]);
				let divLink = document.createElement("div");
				divLink.appendChild(text);
				divLink.style.height = "100%";
				divLink.style.width = "100%";
				divLink.style.whiteSpace = "nowrap";
				divLink.style.display = "inline-block";
				a.appendChild(divLink);
				li.appendChild(a);
				ul.appendChild(li);
			}
			menu.appendChild(ul);
		}
	});
};

$(document).ready(function() {
	let heads = $("h2");
	heads.css("cursor", "pointer");
	heads.prepend('<img src="images/interface/menu_less.gif" alt="" />');
	heads.click(function() {
		$("img", this).attr("src", function(i, src) {
			return src == "images/interface/menu_more.gif" ? "images/interface/menu_less.gif" : "images/interface/menu_more.gif";
		});
		$(this).next().slideToggle();
	});
	let link = $("div#menu ul li a");
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
