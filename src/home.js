function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const videoURL = '/src/static/videos/MrKrabsLong.mp4'
    const quoteText = document.createElement("p");
    const whyComeText = document.createElement("p");
    const moneyVideo = document.createElement("video");
    quoteText.innerText = '"The Krusty Krab! Come spend your money here!"';
    whyComeText.innerText = 'One might ask, why should I come to the Krusty Krab 2 and not other fine establishments? To that I say, allow our CEO Eugene H. Krabs to explain why.';
    quoteText.classList.add("quote")
    moneyVideo.id = "video";
    moneyVideo.width = 640;
    moneyVideo.height = 320;
    moneyVideo.src = videoURL;
    moneyVideo.controls = true;

    // moneyVideo.addEventListener('click', () => {
    //     ((moneyVideo.currentTime > 0) && (moneyVideo.paused == false)) ? moneyVideo.pause() : moneyVideo.play();
    // })

    home.appendChild(quoteText);
    home.appendChild(whyComeText);
    home.appendChild(moneyVideo);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;