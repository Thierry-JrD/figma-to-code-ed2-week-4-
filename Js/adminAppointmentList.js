/* Admin Appointment List */

// Fonction pour afficher la liste des utilisateurs et leurs rendez-vous
function afficherUtilisateursEtRendezVous() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || {};
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    for (const user in appointments) {
      const userItem = document.createElement('li');
      userItem.textContent = `Utilisateur: ${user}`;
  
      const userAppointments = appointments[user];
      const ul = document.createElement('ul');
      
      userAppointments.forEach(function(appointment) {
        const appointmentItem = document.createElement('li');
        appointmentItem.textContent = `Date: ${appointment.date}, Heure: ${appointment.time}`;
        ul.appendChild(appointmentItem);
      });
  
      userItem.appendChild(ul);
      userList.appendChild(userItem);
    }
  }
  
  // Appel de la fonction pour afficher les utilisateurs et rendez-vous au chargement de la page
  afficherUtilisateursEtRendezVous();
  