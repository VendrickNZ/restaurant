function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const visitUs = document.createElement("div");
    visitUs.classList.add("visitUs");

    const images = document.createElement("div");
    images.classList.add("images");

    const contactText = document.createElement("p");
    contactText.textContent = "Visit us at 831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean";
    contactText.classList = "contactText";

    const contactRestaurantImage = document.createElement("img");
    contactRestaurantImage.src = "/src/images/krustykrab2.webp";
    contactRestaurantImage.height = 650
    contactRestaurantImage.width = 850

    const mrKrabsText = document.createElement("p");
    mrKrabsText.textContent = "Our founder, Eugene H. Krabs";
    mrKrabsText.classList = "mrKrabsText";

    const mrKrabsImage = document.createElement("img");
    mrKrabsImage.src = "/src/images/mrkrabs.webp";
    mrKrabsImage.height = 650;
    mrKrabsImage.width = 850;

    const mrKrabsIcon = document.createElement('img');
    mrKrabsIcon.src = "/src/images/krustykrabicon.png";
    mrKrabsIcon.height = 20;
    mrKrabsIcon.width = 40;

    images.appendChild(mrKrabsText);

    images.appendChild(contactRestaurantImage);
    images.appendChild(mrKrabsImage);
    
    visitUs.appendChild(mrKrabsIcon);
    visitUs.appendChild(contactText)

    contact.appendChild(visitUs);
    contact.appendChild(images);
    
    
    return contact
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;