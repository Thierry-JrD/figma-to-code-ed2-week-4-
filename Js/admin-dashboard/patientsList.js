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

const patientsListRender = () => {
    let content = `

    `

    return content
}

patientsList.innerHTML = patientsListRender()