'use strict';

/*
  Show and hide menu on small screens
*/
var menuButton = document.getElementById('menubutton');
var navBox = document.getElementById('navmenu');

function displayMenu() {
  navBox.classList.toggle('showmenu');
}

menuButton.addEventListener('click', displayMenu, false);