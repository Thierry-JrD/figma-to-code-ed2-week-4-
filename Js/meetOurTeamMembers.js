/* Meet Our Team Members */

const meetOurTeamMembers = document.getElementById('meetOurTeamMembers');

const meetOurTeamMembersData = [
    {
        'img': './assets/profiles/ceo.png',
        'name': 'John Carter',
        'level': 'CEO & Co-Founder',
        'description': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'links': [
            {
                'type': 'Facebook',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'X',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'Instagram',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'LinkedIn',
                'img': 'modified',
                'link': '#'
            },
        ]
    },
    {
        'img': './assets/profiles/dental-specialist.png',
        'name': 'Sophie Moore',
        'level': 'dental specialist',
        'description': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'links': [
            {
                'type': 'Facebook',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'X',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'Instagram',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'LinkedIn',
                'img': 'modified',
                'link': '#'
            },
        ]
    },
    {
        'img': './assets/profiles/orthopedic.png',
        'name': 'Matt Cannon',
        'level': 'orthopedic',
        'description': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'links': [
            {
                'type': 'Facebook',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'X',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'Instagram',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'LinkedIn',
                'img': 'modified',
                'link': '#'
            },
        ]
    },
    {
        'img': './assets/profiles/brain-surgeon.png',
        'name': 'Andy Smith',
        'level': 'brain surgeon',
        'description': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'links': [
            {
                'type': 'Facebook',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'X',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'Instagram',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'LinkedIn',
                'img': 'modified',
                'link': '#'
            },
        ]
    },
    {
        'img': './assets/profiles/heart-specialist.png',
        'name': 'Lily Woods',
        'level': 'heart specialist',
        'description': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'links': [
            {
                'type': 'Facebook',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'X',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'Instagram',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'LinkedIn',
                'img': 'modified',
                'link': '#'
            },
        ]
    },{
        'img': './assets/profiles/eye-specialist.png',
        'name': 'Patrick Meyer',
        'level': 'eye specialist',
        'description': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'links': [
            {
                'type': 'Facebook',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'X',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'Instagram',
                'img': 'modified',
                'link': '#'
            },
            {
                'type': 'LinkedIn',
                'img': 'modified',
                'link': '#'
            },
        ]
    }
];

const meetCardRender = (obj) => {

    let intant = '';

    let content = 
    `
    <div class='card'>
        <div class="imgFrame">
            <img src="${obj.img}" alt="${obj.img}.card"/>
        </div>
        <div class="level">
            <h4>${obj.name}</h4>
            <h5>${obj.level}</h5>
        </div>
        <div class="description">${obj.description}</div>
        <div>
            <a href="#">*Follow*</a>
        </div>
    </div>
    `;

    return content;
};

const meetOurTeamMembersRender = () => {
    let meetOurTeamMembersContent = '';

    meetOurTeamMembersData.map((el) => {
        meetOurTeamMembersContent += meetCardRender(el);
    });

    return meetOurTeamMembersContent;
};

meetOurTeamMembers.innerHTML = 
`
    <h2>Meet our team members</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
    <div class="grid">${meetOurTeamMembersRender()}</div>
`;