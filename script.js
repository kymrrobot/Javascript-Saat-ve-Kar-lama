let name = prompt("Adınız Nedir :");
let myName = document.querySelector("#myName");

myName.innerHTML = `${name}`;

function showTime() {
    var tarih = new Date();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    var gun = tarih.getDay();

    if (gun == 1) {
        gun = "Pazartesi";
    } else if (gun == 2) {
        gun = "Salı";
    } else if (gun == 3) {
        gun = "Çarşamba";
    } else if (gun == 4) {
        gun = "Perşembe";
    } else if (gun == 5) {
        gun = "Cuma";
    } else if (gun == 6) {
        gun = "Cumartesi";
    } else if (gun == 7) {
        gun = "Pazar";
    } 

    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    var zaman = document.querySelector("div#myClock");
    zaman.innerHTML = `${saat} : ${dakika} : ${saniye}  ${gun}`; 
    setTimeout(showTime, 1000);
}
showTime();