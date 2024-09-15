/* Testimonial */

const testimonial = document.getElementById('testimonial');

const testimonialData = [
    {
        'img': '',
        'comment': '“An amazing service”',
        'description': 'Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.',
        'identity': ['John Karter', 'CEO at Google'],
    },
    {
        'img': '',
        'comment': '“One of a kind service”',
        'description': 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.',
        'identity': ['Sophie Moore', 'MD at Facebook'],
    },
    {
        'img': '',
        'comment': '“The best service”',
        'description': 'Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant.',
        'identity': ['Andy Smith', 'CEO Dot Austere'],
    }
];

const testimonialCardRender = (obj) => {
    let content = 
    `
    <div class='card'>
        <div class="imgFrame">${obj.img}</div>
        <div>
            <h3>${obj.comment}</h3>
            <p>${obj.description}</p>
        </div>
        <div>
            <span>${obj.identity[0]}</span>
            <span>${obj.identity[1]}</span>
        </div>
    </div>
    `;

    return content;
};

const testimonialRender = () => {
    let testimonialContent = '';

    testimonialData.map((el) => {
        testimonialContent += testimonialCardRender(el);
    });
    
    return testimonialContent;
};

testimonial.innerHTML = 
`
    <h3>Testimonial</h3>
    <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
    <div class="grid">${testimonialRender()}</div>
`;