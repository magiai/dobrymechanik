/*! Dory Mechanik v0.0.1 | (c) 2020 Dominika Adamska | MIT License | http://link-to-your-git-repo.com */
document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);