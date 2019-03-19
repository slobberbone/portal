# Personal portal 
![Portal logo](/images/interface/portal_logo.png)

Simple portal in html/javascript without database. Allow to display different links to manage our home services !

# Features
- Links are displayed in an iframe
- Toggle button to maximize the main iframe
- Collapse menu
- Loading page information
- Help

# Roadmap
- Menu configuration from json file
- Limit access with a login/password from htpasswd file
- Add Nginx proxy configuration for several services | docker configuration ?

# Screenshots
![Portal demo](/portal.png) ![Portal menu collapse](/portal_menu.png) ![Portal menu toggle](/portal_toggle.png)

1. Copy config/config.sample.json and rename it to config/config.json
2. To add you entries edit dthe config/config.json like :
	` {
	"label":"[titre de la section]",
	"entries":[
	  {"url":"[site internet]", "target":"[main : affiche dans le portal | _blank : ouvre un nouvel onglet", "label":"[titre du lien]"}
	]
	} `
3. Use Docker to expose this service : ` docker run -d --name=portal -v /[path]/Portal:/config:rw -p 80:80 --restart=always linuxserver/nginx `
4. Unzip the portal in ` /[path]/Portal/www/ `
5. Install the extension linked in the top in your web browser to allow iframe to display other website.

## Credits : 

- MiniProxy : https://github.com/joshdick/miniProxy/
- Vautour Style : http://www.be-root.com/2016/10/03/nagios-vautour-style/
	- The menu of Vautour Style use the javascript framework jQuery (https://jquery.com/).
	- The icons of Vautour Style use "Silk icon set" (http://www.famfamfam.com/lab/icons/silk/) created by Mark James. "Silk icon set" is licensed under Creative Commons Attribution 2.5 License (http://creativecommons.org/licenses/by/2.5/).
