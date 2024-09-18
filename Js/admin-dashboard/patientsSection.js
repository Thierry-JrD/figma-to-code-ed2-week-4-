const patientsList = document.getElementById('patients-list')

const patientsData = [
    {
        firstname: "Stacy",
        lastname: "Mitchell",
        appointmentType: "Weekly Visit",
        appointmentTime: "9:15 AM",
        initials: "SM"
    },
    {
        firstname: "Amy",
        lastname: "Dunham",
        appointmentType: "Routine Checkup",
        appointmentTime: "9:30 AM",
        initials: "AD"
    },
    {
        firstname: "Demi",
        lastname: "Joan",
        appointmentType: "Report",
        appointmentTime: "9:50 AM",
        initials: "DJ"
    },
    {
        firstname: "Susan",
        lastname: "Myers",
        appointmentType: "Weekly Visit",
        appointmentTime: "10:15 AM",
        initials: "SM"
    },
]

const patientsHeadlineRender = () => {
    const headlineElement = document.createElement('div'); // Changed to 'div'
    headlineElement.classList.add('patients-headline'); // Added class

    const titleElement = document.createElement('h3');
    titleElement.textContent = 'Patient List';

    const selectElement = document.createElement('select')
    selectElement.name = 'day'
    selectElement.id = 'day'

    const yesterdayOption = document.createElement('option')
    yesterdayOption.value = 'yesterday'
    yesterdayOption.textContent = 'Yesterday'
    selectElement.appendChild(yesterdayOption)

    const todayOption = document.createElement('option')
    todayOption.value = 'today'
    todayOption.textContent = 'Today'
    todayOption.setAttribute('selected', 'selected')
    selectElement.appendChild(todayOption)

    const tomorrowOption = document.createElement('option')
    tomorrowOption.value = 'tomorrow'
    tomorrowOption.textContent = 'Tomorrow'
    selectElement.appendChild(tomorrowOption)

    headlineElement.appendChild(titleElement)
    headlineElement.appendChild(selectElement)
    return headlineElement
}

const patientsRowRender = () => {
    const patientsRowElement = document.createElement('div');
    patientsRowElement.classList.add('patients-row')

    patientsData.forEach(patient => {
    const patientItemElement = document.createElement('div')
    patientItemElement.classList.add('patient-item')

    // Créer l'élément pour l'image ou les initiales
    const patientPictureElement = document.createElement('div')
    patientPictureElement.classList.add('patient-picture')
    patientPictureElement.textContent = patient.initials // Ou une image si disponible

    // Créer l'élément pour les données du patient
    const patientDataElement = document.createElement('div')
    patientDataElement.classList.add('patient-data')

    // Créer l'élément pour le nom et le type de rendez-vous
    const patientAppointmentElement = document.createElement('div')
    patientAppointmentElement.classList.add('patient-appointment')

    const patientNameElement = document.createElement('h3')
    patientNameElement.textContent = `${patient.firstname} ${patient.lastname}`
    patientAppointmentElement.appendChild(patientNameElement)

    const appointmentTypeElement = document.createElement('h6')
    appointmentTypeElement.textContent = patient.appointmentType
    patientAppointmentElement.appendChild(appointmentTypeElement)

    patientDataElement.appendChild(patientAppointmentElement)

    // Créer l'élément pour l'heure du rendez-vous
    const appointmentTimeElement = document.createElement('div')
    appointmentTimeElement.classList.add('appointment-time')
    appointmentTimeElement.textContent = patient.appointmentTime
    patientDataElement.appendChild(appointmentTimeElement)

    patientItemElement.appendChild(patientPictureElement)
    patientItemElement.appendChild(patientDataElement)

    patientsRowElement.appendChild(patientItemElement)
  })

  return patientsRowElement
}

patientsList.appendChild(patientsHeadlineRender())
patientsList.appendChild(patientsRowRender())