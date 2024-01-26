let a=0;
let jdm = document.getElementsByClassName("container");
let cars = document.getElementsByClassName("Carcontainer");
let c=document.getElementsByClassName("wallpaper");
let b=document.getElementById("search");
function hehe(){
    let b=document.getElementById("search");
    if(b.style.display=="flex"){
        b.style.animation="fadeout 1s";
        c[0].style.display="none";
        flag=0;
        setTimeout(()=>{
          b.style.display="none";
        },900);
    }
    if(cars[0].style.display=="flex"){
        cars[0].style.animation="down 1s";
        setTimeout(()=>{cars[0].style.display="none";},950);
    
}
if(a==0){
for(var i = 0;i<jdm.length;i++){
jdm[i].style.display="inline-block";
jdm[i].style.animation="fadein 1s";
console.log("Injected");}
a=1;}
else if(a==1){
    for(var i=0;i<jdm.length;i++){
        jdm[i].style.animation="fadeout 1s";
    }
    a=0;
  setTimeout(() => {
        for(var i=0;i<jdm.length;i++){
            jdm[i].style.display="none";
        }
    }, 900);
}
}
function upper(){
    let b=document.getElementById("search");
    if(b.style.display=="flex"){
        b.style.animation="fadeout 1s";
        c[0].style.display="none";
        flag=0;
        setTimeout(()=>{
          b.style.display="none";
        },900);
    }
    { for(var i=0;i<jdm.length;i++){
        jdm[i].style.animation="fadeout .3s";
    }
  setTimeout(() => {
        for(var i=0;i<jdm.length;i++){
            jdm[i].style.display="none";
        }
        a=0;
    }, 300);
    cars[0].style.display="flex";
    cars[0].style.animation="up 2s";
    console.log("Running");
}
    
}