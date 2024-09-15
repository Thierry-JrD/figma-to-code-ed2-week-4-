/* Reasons To Chose Us */

const reasonToChoseUs = document.getElementById('reasonToChoseUs');

const reasonToChoseUsRender = () => {
    let reasonToChoseUsContent = 
    `
    <div>
        <h2>You have lots of reasons to choose us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam</p>
        <div>
            <button>Get started</button>
            <button>Talk to sales</button>
        </div>
    </div>
    <div class="imgFrame"></div>
    `;

    return reasonToChoseUsContent;
};

reasonToChoseUs.innerHTML = reasonToChoseUsRender();