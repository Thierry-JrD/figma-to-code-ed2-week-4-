 /* Our Result In Number */

 const ourResultNumber = document.getElementById('ourResultNumber');

 const ourResultNumberData = [
    {
        'title': 'Customer Satisfaction',
        'value': 99 + '<span class="symbol">%</span>'
    }, 
    {
        'title': 'Online Patients',
        'value': 15 + '<span class="symbol">k</span>'
    },
    {
        'title': 'Patients Recovered',
        'value': 12 + '<span class="symbol">k</span>'
    },
    {
        'title': 'Company Growth',
        'value': 240 + '<span class="symbol">%</span>'
    },
 ];

 const ourResultNumberRender = () => {
    let ourResultNumberContent = '';

    ourResultNumberData.map((el) => {
        ourResultNumberContent += `
        <div class='ourResultNumberContent'>
            <h2>${el.value}</h2>
            <p>${el.title}</p>
        </div>
        `;
    });

    return ourResultNumberContent;
 };

 ourResultNumber.innerHTML = 
 `
 <h2>Our results in numbers</h2>
 <div class='resultContainer'>${ourResultNumberRender()}</div>
 `;
