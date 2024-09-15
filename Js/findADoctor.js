/* Find A Doctor */

const findADoctor = document.getElementById('findADoctor');

const findADoctorRender = () => {

    let findADoctorContainer = 
    `
    <div>
        <h2>Find a Doctor</h2>
        <div>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Specialy'/>
        </div>
    </div>
    <div><input type='checkbox' /></div>
    <div><button>Search</button></div>
    `;

    return findADoctorContainer
};

findADoctor.innerHTML = findADoctorRender();