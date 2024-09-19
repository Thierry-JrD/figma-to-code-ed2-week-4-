/* Trusted Section */

const trustedSection = document.getElementById('trustedSection');

const trustedSectionData = [
    {
        'id': 'Google',
        'imgurl': './assets/logos/Google.png',
        'src': ''
    },
    {
        'id': 'facebook',
        'imgurl': './assets/logos/Facebook.png',
        'src': ''
    },
    {
        'id': 'youtube',
        'imgurl': './assets/logos/Youtube.png',
        'src': ''
    },
    {
        'id': 'Pinterest',
        'imgurl': './assets/logos/Pinterest.png',
        'src': ''
    },
    {
        'id': 'twitch',
        'imgurl': './assets/logos/Twitch.png',
        'src': ''
    },
    {
        'id': 'webflow',
        'imgurl': './assets/logos/Webflow.png',
        'src': ''
    },
];

const trustedSectionRender = () => {
    let trustedSectionContent = '';

    trustedSectionData.map((el) => {
        trustedSectionContent += 
        `<a href="#">
            <img src="${el.imgurl}" alt="${el.id}.logo">
        </a>`;
    });
    
    return trustedSectionContent;
};

trustedSection.innerHTML = 
`
    <h2 class="title">Trusted by 10,000+ companies around the world</h2>
    <div class="collaborators">${trustedSectionRender()}</div>
`;