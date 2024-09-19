/* Hero Section */

const hero = document.getElementById('hero');

const heroPictures = [
    {
        'id': 'home-doctor',
        'link': './assets/home-doctor.png'
    },
    {
        'id': 'home-doctor-bg',
        'link': './assets/home-doctor-bg.png'
    },
];

const heroRender = () => {
    let heroContainer = 
    `
    <div class='content'>
        <div>
            <h2>Providing Quality <span class='primary'>Healthcare</span> for a <span class='green'>Brighter</span> and <span class='green'>Healthy</span> Future</h2>
            <p>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p> 
        </div> 
        <div>
            <button id="appointmentBtn">Appointment</button>
        </div>  
    </div>
    <div class='imgFrame'>
        <img src='${heroPictures[0]['link']}' alt='${heroPictures[0]['id']}'/>
        <img src='${heroPictures[1]['link']}' alt='${heroPictures[1]['id']}'/>
    </div>
    `;

    return heroContainer;
};

hero.innerHTML = heroRender();