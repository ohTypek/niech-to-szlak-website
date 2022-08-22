function odliczanie() {

    var czas = new Date();

    var godzina = czas.getHours();
    var minuta = czas.getMinutes();
    var sekunda = czas.getSeconds();

    if(sekunda < 10) sekunda = "0"+sekunda;
    if(minuta < 10) minuta = "0"+minuta;

    document.getElementById("p").innerHTML = godzina + ":" + minuta + ":" + sekunda;
    setTimeout("odliczanie()", 1000);
}
window.onload = odliczanie();
