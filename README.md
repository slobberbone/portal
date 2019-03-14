Personal portal

Simple portal in html/javascript without database. Allow to display different links to manage our home services !
![Portal demo](/portal.png) ![Portal menu collapse](/portal_menu.png) ![Portal menu toggle](/portal_toggle.png)

1. Modify the menu.html to add you entries.
2. Install the extension linked in the top in your web browser to allow iframe to display other website.
3. Use Docker to expose this service : ` docker run -d --name=portal -v /[path]/Portal:/config:rw -p 80:80 --restart=always linuxserver/nginx `

Credits : 

- MiniProxy : https://github.com/joshdick/miniProxy/
- Vautour Style : http://www.be-root.com/2016/10/03/nagios-vautour-style/
	- The menu of Vautour Style use the javascript framework jQuery (https://jquery.com/).
	- The icons of Vautour Style use "Silk icon set" (http://www.famfamfam.com/lab/icons/silk/) created by Mark James. "Silk icon set" is licensed under Creative Commons Attribution 2.5 License (http://creativecommons.org/licenses/by/2.5/).
