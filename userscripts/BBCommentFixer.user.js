// ==UserScript==
// @name         BB Comment Fixer
// @namespace    http://tampermonkey.net/
// @version      1.02
// @description  Fixes broken comments links on BoingBoing
// @author       dangaroo
// @match        https://boingboing.net
// @include      /^https:\/\/boingboing.net\/\d{4}\/\d{2}\/\d{2}/[^\/]+\.html$/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=boingboing.net
// @grant        none
// @updateURL    https://perpil.nobackspacecrew.com/userscripts/BBCommentFixer.user.js
// @downloadURL  https://perpil.nobackspacecrew.com/userscripts/BBCommentFixer.user.js
// ==/UserScript==

(function() {
    'use strict';

    let bbs = document.querySelector('a.bbs');
    if(bbs) {
        let href = bbs.href;
        let title = document.querySelector('h1.entry-title')?.textContent;
        let hasWeirdChars = title && title.match(/[\/*:]/);
        bbs.href = href.includes('https://bbs.boingboing.net/t/') ? href : 'https://bbs.boingboing.net/t/' + (hasWeirdChars ?
                                                                                title.replaceAll(/[^-\w: *]/g,'').replaceAll(/[\W]+/g,'-').toLowerCase() :
                                                                                /.*\/(.*)\.html$/.exec(location.pathname)[1]);
    }
})();
