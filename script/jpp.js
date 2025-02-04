


function afficherMenuHumberger() {
    const elem = document.getElementsByClassName("Menu_deroulant")[0];
    const displayStyle = window.getComputedStyle(elem).display; // Récupère le style actuel
    elem.style.display = displayStyle === "none" ? "block" : "none";
}

// Ajoute un écouteur sur le clic pour le bouton hamburger
document.getElementsByClassName("navbar-toggler")[0].addEventListener('click', afficherMenuHumberger);

// Masquer le menu automatiquement quand l'écran est agrandi
window.addEventListener('resize', () => {
    const elem = document.getElementsByClassName("Menu_deroulant")[0];
    if (window.innerWidth > 992) { // Si la largeur dépasse 992px (cas desktop)
        elem.style.display = "none"; // Masque le menu
    }
});


// Gérer le mode sombre et l'icône
const darkModeButton = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('dark-mode-icon');

// Vérifier si le mode sombre est activé dans le stockage local
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun'); // Icône du soleil en mode sombre
}

// Écouter l'événement de clic sur le bouton
darkModeButton.addEventListener('click', () => {
    const darkModeActive = document.body.classList.toggle('dark-mode');
   
    // Mettre à jour l'icône en fonction du mode
    if (darkModeActive) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // Soleil en mode sombre
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); // Lune en mode clair
        localStorage.setItem('darkMode', 'disabled');
    }
});





