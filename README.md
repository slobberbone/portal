# Personal portal 
![Portal logo](/images/interface/portal_logo.png)

Simple portal in html/javascript without database. Allow to display different links to manage your home services !

# Features
- Links are displayed in an iframe
- Toggle buttons to maximize the main iframe with auto mode or not (depend of config file)
- Collapse menu
- Loading page information
- Help
- Menu configuration from json file

# Roadmap
- Limit access with a login/password from htpasswd file
- Add Nginx proxy configuration for several services | docker configuration ?

# Screenshots
![Portal demo](/portal.png) ![Portal menu collapse](/portal_menu.png) ![Portal menu toggle](/portal_toggle.png)

# Installation
1. Use a Web Server like Nginx or Apache Or Use Docker to expose this service : `docker run -d --name=portal -v /[path]/Portal:/config:rw -p 80:80 --restart=always linuxserver/nginx`

2. Unzip the portal in Nginx/Apache directory `/var/www/html` Or for a docker container unzip the portal in :`/[path]/Portal/www/`

3. Copy `config/config.sample.json` and rename it to `config/config.json`

4. To add you entries edit the config/config.json like :
	`{
	"label":"[titre de la section]",
	"entries":[
	  {"url":"[site internet]", "target":"[main : affiche dans le portal | _blank : ouvre un nouvel onglet", "label":"[titre du lien]"}
	]
	}`

5. Install the extension linked in the top in your web browser to allow iframe to display other website.

# Configuration
Edit the config/config.json.

Add an entry in the menu :
	`{
	"label":"[titre de la section]",
	"entries":[
	  {"url":"[site internet]", "target":"[main : affiche dans le portal | _blank : ouvre un nouvel onglet", "label":"[titre du lien]"}
	]
	}`
Disable "auto hide/show on Menu :
	`"ui":[{
	"autoHideMenu":"false",
	"autoHideTop":"true"
     	}],`

Disable "auto hide/show on Top :
	`"ui":[{
	"autoHideMenu":"true",
	"autoHideTop":"false"
     	}],`


Set a width of 20 pixels after "auto hide" on Menu :
	`"ui":[{
	"autoHideMenu":"true",
	"hideMenuWidth":"20"
     	}],`

## Credits : 

- Vautour Style : http://www.be-root.com/2016/10/03/nagios-vautour-style/
	- The menu of Vautour Style use the javascript framework jQuery (https://jquery.com/).
	- The icons of Vautour Style use "Silk icon set" (http://www.famfamfam.com/lab/icons/silk/) created by Mark James. "Silk icon set" is licensed under Creative Commons Attribution 2.5 License (http://creativecommons.org/licenses/by/2.5/).
