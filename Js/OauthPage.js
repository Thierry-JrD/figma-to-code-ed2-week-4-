/* Oauth Page Script */

// Vérification de la connexion
function checkLogin() {
    const currentUser = localStorage.getItem('loggedInUser');
    if (!currentUser) {
      alert('Vous devez vous connecter pour accéder à cette page.');
      window.location.href = 'OauthPage.html'; // Redirection vers la page de connexion
    }
}

//const validation = document.getElementById('validation');
const form = document.getElementById('form');

// Connexion
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Récupérer les utilisateurs enregistrés dans le localStorage
    let users = JSON.parse(localStorage.getItem('users')) || {};
    
    // Vérifier si l'utilisateur existe et que le mot de passe est correct
  if (users[username] && users[username].password === password) {
    localStorage.setItem('loggedInUser', username);
    
    // Redirection vers la page appropriée
    if (username === 'admin') {
      window.location.href = 'admin.html'; // Admin
    } else {
      window.location.href = 'user.html'; // Utilisateur
    }

  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect.");
  }
});












/*let tips = document.createElement("div");
tips.textContent = "Form is submited !!!";
tips.classList.add("tips");*/



