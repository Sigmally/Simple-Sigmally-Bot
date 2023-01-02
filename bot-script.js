//javascript:

setTimeout(() => {
  let btn = document.getElementById('play-btn');
  btn.click();
  setTimeout(() => {
    location.reload();
  }, 200);
}, 500);

//Tampermonkey script:

// ==UserScript==
// @name         really simple bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  simple bot
// @author       Cursed
// @match        https://sigmally.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sigmally.com
// @grant        none
// ==/UserScript==

// Please read the README.md in GitHub: https://github.com/Sigmally/Simple-Sigmally-Bot/

(function() {
    'use strict';

    setTimeout(() => {
        let btn = document.getElementById('play-btn');
        btn.click();
        setTimeout(() => {
            location.reload();
        }, 200);
     }, 500);
})();
