/* Admin Appointment List */

// Fonction pour afficher la liste des utilisateurs et leurs rendez-vous
function afficherUtilisateursEtRendezVous() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || {};
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    for (const user in appointments) {
      const userItem = document.createElement('li');
      userItem.innerHTML = `<span class='userItemName'>User: ${user}</span>`;
  
      const userAppointments = appointments[user];
      const ul = document.createElement('ul');
      
      userAppointments.forEach(function(appointment) {
        const appointmentItem = document.createElement('li');
        appointmentItem.innerHTML = `<span class='date'>Date: ${appointment.date}</span> <span class='hour'>Hour: ${appointment.time}</span>`;
        ul.appendChild(appointmentItem);
      });
  
      userItem.appendChild(ul);
      userList.appendChild(userItem);
    }
  }
  
  // Appel de la fonction pour afficher les utilisateurs et rendez-vous au chargement de la page
  afficherUtilisateursEtRendezVous();
  