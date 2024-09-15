/* Services We Provide */

//import { cardRender } from "../Modules/card";

const servicesWeProvide = document.getElementById('servicesWeProvide');

const servicesWeProvideData = [
    {
        'img': 'link',
        'title': 'Dental treatments',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
    {
        'img': 'link',
        'title': 'Bones treatments',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
    {
        'img': 'link',
        'title': 'Diagnosis',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'Text',
    },
    {
        'img': 'link',
        'title': 'Cardiology',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
    {
        'img': 'link',
        'title': 'Surgery',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
    {
        'img': 'link',
        'title': 'Eye care',
        'content': 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm',
        'learnMore': 'link',
    },
];

const servicesCardRender = (obj) => {
    let content = 
    `
    <div class='card'>
        <div class="imgFrame">${obj.img}</div>
        <div>
            <h3>${obj.title}</h3>
            <p>${obj.content}</p>
            <a href="#">${obj.learnMore}</a>
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
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
    <div class="grid">${servicesWeProvideRender()}</div>
`;