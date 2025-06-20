function Ubah() {
const Jam = new Date().getHours();
const BackgroundUtama = document.getElementById("BackgroundUtama");

BackgroundUtama.style.backgroundColor = ' #006eff'

if ( Jam >= 18 || Jam < 6 ) {
    BackgroundUtama.style.backgroundColor = ' #141952'
}

else {
    BackgroundUtama.style.backgroundColor = ' #006eff' 
}};

Ubah();

setInterval(Ubah, 1000);

function Ganti() {
    const Background = document.getElementById("Background")
    Background.style.backgroundColor = 'rgb(0, 0, 0)'
    
    if ("click") {
        Background.style.backgroundColor = ' #006eff'
    } else if ("click") {
        Background.style.backgroundColor = 'rgb(0, 0, 0)'
    }};
