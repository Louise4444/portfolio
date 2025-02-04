// Création de l'objet Visiteur avec tous ses champs
class Visiteur {
    constructor(nom, email, message) {
        this.nom = nom;
        this.email = email;
        this.message = message;
    }

    // Méthode pour afficher les champs
    verification() {
        alert(`Vous êtes ${this.nom}, votre email est : ${this.email}, et vous voulez envoyer ce message : "${this.message}"`);
    }
}

// Fonction de validation du formulaire
document.getElementById('boutt').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire si la validation échoue

    // Validation des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Tous les champs sont obligatoires !");
        return;
    }

    // Validation de l'email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    // Création de l'objet Visiteur et appel de la méthode de vérification
    const visiteurInstance = new Visiteur(name, email, message);
    visiteurInstance.verification();

    // Message de succès et réinitialisation du formulaire
    alert("Message envoyé avec succès !");
    document.getElementById('contactForm').reset(); // Réinitialise le formulaire
});