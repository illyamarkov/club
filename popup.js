let aboutButton = document.getElementById('aboutButton');
let artistButton = document.getElementById('artistButton');
let aboutOverlay = document.getElementById('aboutOverlay');
let artistOverlay = document.getElementById('artistOverlay');

let aboutPopup = false;
let artistPopup = false;

aboutButton.addEventListener('click', function (event) {
    artistOverlay.style.display = 'none'
    artistPopup = false
    if (aboutPopup == false){
        aboutOverlay.style.display = 'block'
        aboutPopup = true;
    }
    else{
        aboutOverlay.style.display = 'none'
        aboutPopup = false;
    }
});

artistButton.addEventListener('click', function (event) {
    aboutOverlay.style.display = 'none'
    aboutPopup = false
    if (artistPopup == false){
        artistOverlay.style.display = 'block'
        artistPopup = true;
    }
    else{
        artistOverlay.style.display = 'none'
        artistPopup = false;
    }
});

document.getElementById('closeArtist').addEventListener('click', function (event) {
    artistOverlay.style.display = 'none'
    artistPopup = false
});

document.getElementById('closeAbout').addEventListener('click', function (event) {
    aboutOverlay.style.display = 'none'
    aboutPopup = false
});