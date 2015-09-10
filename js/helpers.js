(function(window) {
	'use strict';

    window.qs = function(selector, scope) {
        return (scope || document).querySelector(selector);
    };
    
    window.qsa = function(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    };
    
    window.$on = function(target, type, callback, useCapture) {
	target.addEventListener(type, callback, !!useCapture);
    };

    window.show = function(target) {
        target.style.display = 'block';
    };

    window.hide = function(target) {
        target.style.display = 'none';
    };
    
    window.createCookie = function(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        } else {
            expires = '';
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    };

    window.getCookie = function(c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + '=');
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(';', c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return '';
    };
    
})(window);
