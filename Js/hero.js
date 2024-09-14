/* Hero Section */

const hero = document.getElementById('hero');

const heroRender = () => {
    let heroContainer = 
    `
    <div class='content'>
        <div>
            <h2>Providing Quality Healthcare for a Brighter anFuture</h2>
            <p>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p> 
        </div> 
        <div>
            <button>Appointment</button>
        </div>  
    </div>
    <div class='imgFrame'></div>
    `;

    return heroContainer;
};

hero.innerHTML = heroRender();