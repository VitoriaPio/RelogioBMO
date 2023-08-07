function carregar() {
var msg = document.getElementById("msg");
var data = new Date();
var hora = data.getHours();
var min = data.getMinutes();
var seg = data.getUTCSeconds();

msg.innerHTML = `${hora}:${min}:${seg}`

if(hora >= 0 &&  hora < 12 ){
    document.body.style.backgroundImage = "url(img/morning.jpg)";
} else if (hora >= 12 && hora < 18){
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
}else{
    document.body.style.backgroundImage = "url('img/night.jpg')";
}

if(min < 10){
    msg.innerHTML=`${hora}:0${min}:${seg}`
}
if(hora < 10){
    msg.innerHTML=`0${hora}:${min}:${seg}`
}
if(seg < 10){
    msg.innerHTML=`${hora}:${min}:0${seg}`
}
setInterval(carregar, 1000);
}