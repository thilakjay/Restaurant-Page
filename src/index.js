import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import './css/index.css';

const container = document.body.querySelector('#container');
const homeLink = document.querySelector('#home');
const menuLink = document.querySelector('#menu');
const contactLink = document.querySelector('#contact');

homeLink.addEventListener('click', () => {
    clearContent();
    home();
});

menuLink.addEventListener('click', () => {
    clearContent();
    menu();
});

contactLink.addEventListener('click', () => {
    clearContent();
    contact();
});

home();

function clearContent() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}