function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactText = document.createElement("p");
    contactText.textContent = "Visit us at 831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean";

    const contactRestaurantImage = document.createElement("img");
    contactRestaurantImage.src = "../dist/images/krustykrab2.webp";
    contactRestaurantImage.height = 650
    contactRestaurantImage.width = 850

    const mrKrabsImage = document.createElement("img");
    mrKrabsImage.src = "../dist/images/mrkrabs.webp";
    mrKrabsImage.height = 650;
    mrKrabsImage.width = 850;

    contact.appendChild(contactText);
    contact.appendChild(contactRestaurantImage);
    contact.appendChild(mrKrabsImage);
    
    return contact
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;