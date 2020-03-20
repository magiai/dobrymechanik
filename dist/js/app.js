/*! Dory Mechanik v0.0.1 | (c) 2020 Dominika Adamska | MIT License | http://link-to-your-git-repo.com */
'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', 0, true),
            new Route('about', 'about.html'),
            new Route('schedule-meeting', 'schedule-meeting.html', 1),
            new Route('choose-date', 'choose-date.html', 2),
        ]);
    }
    init();
}());