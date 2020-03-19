/*! Dory Mechanik v0.0.1 | (c) 2020 Dominika Adamska | MIT License | http://link-to-your-git-repo.com */
'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html'),
            new Route('about', 'about.html')
        ]);
    }
    init();
}());