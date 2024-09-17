/* SIDEBAR NAVIGATION */

const sidebar = document.getElementById('sidebar')

const sidebarIcons = [
    {
        title: "home",
        img: "../assets/home.png",
        href: "home.html"
    },
    {   
        title: "calendar",
        img: "../assets/calendar.png",
        href: "calendar.html"
    },
    {
        title: "chats",
        img: "../assets/chats.png",
        href: "chats.html"
    },
    {
        title: "stats",
        img: "../assets/stats.png",
        href: "stats.html"
    },
    {
        title: "settings",
        img: "../assets/settings.png",
        href: "settings.html"
    },
    {
        title: "logout",
        img: "../assets/logout.png",
        href: "../index.html"
    }
]

const sidebarIconBuilder = (icon) => {
    let content = 
    `
    <div class='sidebar-icon'>
        <a href="${icon.href}"><img src="${icon.img}" alt="${icon.title}"></a>
    </div>
    `

    return content
}

const sidebarIconsRender = () => {
    let sidebarContent = '';

    sidebarIcons.map((icon) => {
        sidebarContent += sidebarIconBuilder(icon);
    });
    
    return sidebarContent
}

sidebar.innerHTML = `
    <div class="sidebar-grid">${sidebarIconsRender()}</div>
`