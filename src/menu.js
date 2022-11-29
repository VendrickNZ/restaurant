function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuImage = document.createElement('img');
    menuImage.src = "/src/static/images/menu.webp";
    menuImage.height = 800;
    menuImage.width = 700;
    menu.appendChild(menuImage);

    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;