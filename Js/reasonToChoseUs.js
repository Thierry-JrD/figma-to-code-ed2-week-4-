/* Reasons To Chose Us */

const reasonToChoseUs = document.getElementById('reasonToChoseUs');

const hospitalPictures = [
    {
        'id': 'container',
        'link': './assets/container.png'
    }
];

const reasonToChoseUsRender = () => {
    let reasonToChoseUsContent = 
    `
    <div class="content">
        <h2>You have lots of reasons to choose us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam</p>
        <div class="btns">
            <button>Get started</button>
            <button>Talk to sales</button>
        </div>
    </div>
    <div class="imgFrame">
        <img src='${hospitalPictures[0]['link']}' alt='${hospitalPictures[0]['id']}'/>
    </div>
    `;

    return reasonToChoseUsContent;
};

reasonToChoseUs.innerHTML = reasonToChoseUsRender();