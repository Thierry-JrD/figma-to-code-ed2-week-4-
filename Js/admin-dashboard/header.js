/* SIDEBAR NAVIGATION */

const header = document.getElementById('header')

const profile = {
    name: "Dr. Kim",
    img: "assets/doctor-profile.png"
}

const searchBar = {
    placeholder:"Search",
    img: "assets/search.png"
}

const extraIcon = {
    message : "assets/messages.png",
    notification: "assets/notification.png"
}

const headerRender = () => {
    let headerContainer = 
    `
    <div class='searchbar'>
        <input type="search" placeholder="${searchBar.placeholder}"> 
        <img src="${searchBar.img}" alt="search extra icon">
    </div>
    <div class="header-right">
        <div class='extra-icon'>
            <a><img src="${extraIcon.message}" alt="view messages"></a>
            <a><img src="${extraIcon.notification}" alt="view notification"></a>
        </div>
        <div class='doctor-profile'>
            <img src="${profile.img}" alt="Dr. Kim photo">
            <span>${profile.name}</span>
        </div>
    </div>
    `

    return headerContainer
}

header.innerHTML = headerRender()