/* Trusted Section */

const trustedSection = document.getElementById('trustedSection');

const trustedSectionData = [
    {
        'id': 'Google',
        'imgurl': '',
        'src': ''
    },
    {
        'id': 'facebook',
        'imgurl': '',
        'src': ''
    },
    {
        'id': 'youtube',
        'imgurl': '',
        'src': ''
    },
    {
        'id': 'Pinterest',
        'imgurl': '',
        'src': ''
    },
    {
        'id': 'twitch',
        'imgurl': '',
        'src': ''
    },
    {
        'id': 'webflow',
        'imgurl': '',
        'src': ''
    },
];

const trustedSectionRender = () => {
    let trustedSectionContent = '';

    trustedSectionData.map((el) => {
        trustedSectionContent += `<h2>${el.id}</h2>`;
    });
    
    return trustedSectionContent;
};

trustedSection.innerHTML = 
`
    <h3>Trusted by 10,000+ companies around the world</h3>
    <div class="collaborators">${trustedSectionRender()}</div>
`;