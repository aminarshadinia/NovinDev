var cookiesMixin = {
    methods: {
        setCookie(
            name,
            value,
            days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000)); // Cookie ExpireDate (Days)
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/"; //Sets cookie

        },
        getCookie(name) {
        var nameEqual = name + "="; 
        var allCookies = document.cookie.split(';'); // Gets all cookies
        for(var i=0;i < allCookies.length;i++) {
            var _cookie = allCookies[i];
            while (_cookie.charAt(0)==' ')
                _cookie = _cookie.substring(1,_cookie.length); // Earases cookies empty spaces
            if (_cookie.indexOf(nameEqual) == 0) // Checks cookie name
                return _cookie.substring(nameEqual.length,_cookie.length);  //returns cookie value
        }

        return null;

        },
        eraseCookie(name) {   
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // Sets cookie value equal to NULL 

        }
    }
}


export {cookiesMixin}