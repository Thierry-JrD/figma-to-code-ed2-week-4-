/* News Letter */

const newsLetter = document.getElementById('newsLetter');

const newsLetterRender = () => {
    let newsLetterContent = 
    `
        <h3>Subscribe to our newsletter</h3>
        <form>
            <input type='email' placeholder='Enter your email' />
            <button>Subscribe</button>
        </form>
    `;

    return newsLetterContent;
};

newsLetter.innerHTML = newsLetterRender();