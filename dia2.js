const segundos=document.querySelector(".segundos");
const minutos=document.querySelector(".minutos");
const horas=document.querySelector(".horas");
setSegundos();
setHoras();
setMinutos();

function setSegundos (){
    var fecha=new Date();
   var  seconds=fecha.getSeconds();
    var secondsgradianes=(seconds/60)*360+90;

    segundos.style.transform=`rotate(${secondsgradianes}deg)`;
    console.log(seconds);
}
function setMinutos(){
    var fecha=new Date();
    var minute=fecha.getMinutes()
    var minutegradianes=(minute/60)*360+90;
    minutos.style.transform=`rotate(${minutegradianes}deg)`;
    
}
function setHoras(){
    var fecha=new Date();
    var hour=fecha.getHours();
    var hourgradianes=(hour/12)*360+90;
    horas.style.transform=`rotate(${hourgradianes}deg)`;
    
}
function Global(){
    setMinutos();
    setSegundos();
    setHoras();
}








setInterval(Global, 1000);
