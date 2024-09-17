/* Appointment Script */

const username = document.getElementById('username');
username.textContent = localStorage.getItem('loggedInUser');

// Fonction pour prendre un rendez-vous
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    const currentUser = localStorage.getItem('loggedInUser');

    if (!currentUser) {
      alert('Vous devez vous connecter pour prendre un rendez-vous.');
      return;
    }
  
    let appointments = JSON.parse(localStorage.getItem('appointments')) || {};
    
    if (!appointments[currentUser]) {
      appointments[currentUser] = [];
    }
  
    appointments[currentUser].push({ date, time });
    localStorage.setItem('appointments', JSON.stringify(appointments));
  
    alert('Rendez-vous pris avec succès !');
    afficherRendezVous();
  });
  
  // Afficher les rendez-vous de l'utilisateur connecté
  function afficherRendezVous() {
    const currentUser = localStorage.getItem('loggedInUser');
    const appointments = JSON.parse(localStorage.getItem('appointments')) || {};
    const userAppointments = appointments[currentUser] || [];
    
    const appointmentList = document.getElementById('appointmentList');
    appointmentList.innerHTML = '';
  
    userAppointments.forEach((appointment) => {
      const li = document.createElement('li');
      li.textContent = `Date: ${appointment.date}, Heure: ${appointment.time}`;
      appointmentList.appendChild(li);
    });
  }
  
  // Appel de la fonction pour afficher les rendez-vous au chargement de la page
  afficherRendezVous();
  