let yesGifList = document.getElementById("yes-gif-list");
let noGifList = document.getElementById("no-gif-list");
let gifGalleryURL = "https://shouldyoudoit.herokuapp.com/all";

function getGifs() {
    fetch(gifGalleryURL)
        .then((response) => response.json())
        .then((data) => {
          //insert gifs in HTML
          data.forEach( (item) => {
            if(item.msg == "do it") {
                yesGifList.innerHTML += `
                <li><img src="${item.img}" alt="${item.msg}"></li>
                `;
            } else {
                noGifList.innerHTML += `
                <li><img src="${item.img}" alt="${item.msg}"></li>
                `;
            }
          })
        })
        .catch((error) => console.log(error));

}