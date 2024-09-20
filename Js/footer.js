/* Footer Js file */

const footerLinks = document.querySelector('.links');
const copyrightDate = document.getElementById('copyrightDate')

const footerSection = [
    {
        'title': 'Product',
        'content': ['Features', 'Pricing', 'Case studies', 'Reviews', 'Updates']
    }, 
    {
        'title': 'Company',
        'content': ['About', 'Contact Us', 'Careers', 'Culture', 'Blog']
    },
    {
        'title': 'Support',
        'content': ['Getting started', 'Help Center', 'Server status', 'Report a bug', 'Chat support']
    },
    {
        'title': 'Follow Us',
        'content': ['Facebook', 'X', 'Instagram', 'LinkedIn', 'Youtube']
    }
];

const date = new Date();

const year = date.getFullYear();

const footerRender = () => {
    let footerBuffer = '';

    footerSection.map((el) => {
        footerBuffer += `
        <div class='section'>
            <h3>${el.title}</h3>
            <ul>
                ${el.content.map((subEL) => '<li><a href="#">' + subEL + '</a></li>').join('')}
            </ul>
        </div>
        `;
    });

    return footerBuffer;
};

footerLinks.innerHTML = footerRender();
copyrightDate.innerHTML = year; 

