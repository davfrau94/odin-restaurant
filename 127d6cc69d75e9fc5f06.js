import "./styles.css";
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadContact from './contact.js';

const content = document.getElementById('content');

// Funzione per pulire il div#content
function clearContent() {
    content.textContent = '';
}

// Event listener per ogni bottone
document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.getElementById('about-btn').addEventListener('click', () => {
    clearContent();
    loadAbout();
});

document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent();
    loadContact();
});

// Carica la home di default all’avvio
loadHome();

