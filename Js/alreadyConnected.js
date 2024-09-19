/* Aready connected Script */

// Vérifier que le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('Le DOM est entièrement chargé.');

    const appointmentBtn = document.getElementById('appointmentBtn');

    const currentUser = localStorage.getItem('loggedInUser');

    // Connexion
    appointmentBtn.addEventListener('click', function() {
    
        // Récupérer les utilisateurs enregistrés dans le localStorage
        let users = JSON.parse(localStorage.getItem('users')) || {};
        console.log('Bouton cliqué');

        // Vérifier si l'utilisateur existe
        if (users[currentUser]) {
            //localStorage.setItem('loggedInUser', username);
    
            // Redirection vers la page appropriée
            if (currentUser === 'admin') {
                window.location.href = 'Sections/admin-dashboard.html'; // Admin
            } else {
                window.location.href = 'Sections/user.html'; // Utilisateur
            }

        } else {
            alert("Vous n'avez pas encore un compte, veuillez en créer un avant de prendre rendez-vous !");
            window.location.href = 'Sections/register.html'; // Redirection vers la page de création de compte
        }
    });
});