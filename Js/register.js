/* Register Script */

// Gestion de la création de compte
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Vérifier que le mot de passe et sa confirmation correspondent
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    
    // Récupérer la liste des utilisateurs existants
    let users = JSON.parse(localStorage.getItem('users')) || {};
    
    // Vérifier si l'utilisateur existe déjà
    if (users[username]) {
      alert("Ce nom d'utilisateur est déjà pris.");
      return;
    }
    
    // Ajouter le nouvel utilisateur au stockage
    users[username] = { password };
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
    window.location.href = 'OauthPage.html'; // Redirection vers la page de connexion
  });
  