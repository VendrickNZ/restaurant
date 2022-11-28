import loadHome from "./home";
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "The Krusty Krab 2";
    restaurantName.classList.add("restaurantName");
    
    header.appendChild(restaurantName);
    header.appendChild(createNavBar());
    return header;
}

function createNavBar() {
    const nav = document.createElement("nav");
    const homeBtn = document.createElement("button");
    homeBtn.classList.add("navBtn");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(homeBtn);
        loadHome();
    });
    
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("navBtn");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(menuBtn);
        loadMenu();
    });
    
    const contactBtn = document.createElement("button");
    contactBtn.classList.add("navBtn");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(contactBtn);
        loadContact();
    });
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    return nav;
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll('navBtn');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}


function createMain() {    
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const githubProfile = document.createElement("a");
    githubProfile.textContent = "VendrickNZ"
    githubProfile.href = "https://github.com/VendrickNZ"
    githubProfile.classList.add("profileLink");

    footer.appendChild(githubProfile);

    return footer;
}

function initializeWebsite() {
    const container = document.getElementById("content");
    
    container.appendChild(createHeader());
    container.appendChild(createMain());
    container.appendChild(createFooter());

    setActiveBtn(document.querySelector(".navBtn"));
    loadHome();
}

export default initializeWebsite;