const helloDoctor = document.getElementById('overview')

const visitors = {
    visitorsAmount: 104,
    oldPatients: 64,
    oldPatientsPercentage: "20%",
    newPatients: 40,
    newPatientsPercentage: "51%",
    increaseIcon: "assets/increase.png",
    discreaseIcon: "assets/discrease.png",
    fullDoctorePicture: "assets/doctor-picture.png"
}

const helloRender = () => {
    let helloContent = 
    `
    <div class='hello-container'>
        <p>Good Morning<span> Dr. Kim!</span></p>
        <div class="hello-content">
            <div class="hello-left">
                <p>Visits for today</p>
                <h1>${visitors.visitorsAmount}</h1>
                <div class="patients-insights">
                    <div class="patients-card">
                        <h3>New Patients</h3>
                        <div class="badge-infos">
                            <h2>${visitors.newPatients}</h2>
                            <div class="badge">
                                <span>${visitors.newPatientsPercentage}</span>
                                <img src="${visitors.increaseIcon}" alt="number of patients rised">
                            </div>
                        </div>
                    </div>
                    <div class="patients-card">
                        <h3>Old Patients</h3>
                        <div class="badge-infos">
                            <h2>${visitors.oldPatients}</h2>
                            <div class="badge">
                                <span>${visitors.oldPatientsPercentage}</span>
                                <img src="${visitors.discreaseIcon}" alt="number of patients dropped">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hello-right">
            </div>
        </div>        
    </div>
    `

    return helloContent
}

helloDoctor.innerHTML = helloRender()