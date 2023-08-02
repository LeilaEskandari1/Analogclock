let min=document.querySelector('.min');
let sec=document.querySelector('.sec');
let hour=document.querySelector('.hour');
let deg=6;

 setInterval(clockHandler,1000);
 function clockHandler(){
    let mydate=new Date();
    let s=mydate.getSeconds()*deg;
let m=mydate.getMinutes()*deg;
let h=mydate.getHours()*30;
 sec.style.transform=`rotateZ(${s}deg)`;
 min.style.transform=`rotateZ(${m}deg)`;
 hour.style.transform=`rotateZ(${h+(m/12)}deg)`;

 }
















