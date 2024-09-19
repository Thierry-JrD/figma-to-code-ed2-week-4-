/* Services We Provide */

//import { cardRender } from "../Modules/card";

const servicesWeProvide = document.getElementById('servicesWeProvide');

const servicesWeProvideData = [
    {
        'img': './assets/dental.png',
        'title': 'Dental treatments',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
    {
        'img': './assets/bones.png',
        'title': 'Bones treatments',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
    {
        'img': './assets/diagnosis.png',
        'title': 'Diagnosis',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'Text',
    },
    {
        'img': './assets/cardiology.png',
        'title': 'Cardiology',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
    {
        'img': './assets/surgery.png',
        'title': 'Surgery',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
    {
        'img': './assets/eye-care.png',
        'title': 'Eye care',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'learn more',
    },
];

const servicesCardRender = (obj) => {
    let content = 
    `
    <div class='card'>
        <div class="imgFrame">
            <img src='${obj.img}' alt='${obj.img}.card' />
        </div>
        <div class='cardInnerContent'>
            <h3>${obj.title}</h3>
            <p>${obj.content}</p>
            <a href="#">Learn more &rarr;</a>
        </div>
    </div>
    `;

    return content;
};

const servicesWeProvideRender = () => {
    let servicesWeProvideContent = '';

    servicesWeProvideData.map((el) => {
        servicesWeProvideContent += servicesCardRender(el);
    });

    return servicesWeProvideContent;
};

servicesWeProvide.innerHTML = 
`
    <h2>Services we provide </h2>
    <p class='contentPara'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
    <div class="grid">${servicesWeProvideRender()}</div>
`;