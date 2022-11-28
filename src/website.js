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
    console.log('hi');
    const videoURL = '../dist/videos/MrKrabsLong.mp4'
    const main = document.createElement("main");
    const quoteText = document.createElement("p");
    const whyComeText = document.createElement("p");
    const moneyVideo = document.createElement("video");
    quoteText.innerText = 'The Krusty Krab! Come spend your money here!';
    whyComeText.innerText = 'One might ask, why should I come to the Krusty Krab 2 and not other fine establishments? To that I say, allow our CEO Eugene H. Krabs to explain to you why.';
    moneyVideo.id = "video";
    moneyVideo.width = 640;
    moneyVideo.height = 320;
    moneyVideo.src = videoURL;
    moneyVideo.controls = true;

    // moneyVideo.addEventListener('click', () => {
    //     ((moneyVideo.currentTime > 0) && (moneyVideo.paused == false)) ? moneyVideo.pause() : moneyVideo.play();
    // })
    main.classList.add("main");
    main.setAttribute("id", "main");
    main.appendChild(quoteText);
    main.appendChild(whyComeText);
    main.appendChild(moneyVideo);
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const repoLink = document.createElement("a");
    const githubProfileLink = document.createElement("a");
    const githubProfile = document.createElement("text");
    const repo = document.createElement("text");

    githubProfile.textContent = "VendrickNZ |"
    repo.textContent = "| restaurant repository"

    githubProfileLink.href = "https://github.com/VendrickNZ";
    repoLink.href = "https://github.com/VendrickNZ/restaurant";

    repoLink.appendChild(repo);
    githubProfileLink.appendChild(githubProfile);

    footer.appendChild(githubProfileLink);
    footer.appendChild(repoLink);

    return footer;
}

function initializeWebsite() {
    const container = document.getElementById("content");
    
    container.appendChild(createHeader());
    container.appendChild(createMain());
    container.appendChild(createFooter());
}

export default initializeWebsite;