
// ### Cookies management ####

var PortalUtils = function() {};

/**
 * @function PortalUtils#createCookie
 * @static
 * @description Create a cookie
 * @param {string} cname Cookie's name
 * @param {string} cvalue Cookie's value
 * @param {string} exdays Cookie's expiration duration in day
 * @return {void}
 */
PortalUtils.createCookie = function(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

/**
 * @function PortalUtils#getCookie
 * @static
 * @description Get a cookie
 * @param {string} cname Cookie's name
 * @return {string} cookie's value
 */
PortalUtils.getCookie = function(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

/**
 * @function PortalUtils#deleteCookie
 * @static
 * @description Delete a cookie
 * @param {string} name Cookie's name
 * @return {void}
 */
PortalUtils.deleteCookie = function(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
};
