let URL="https://api.pexels.com/v1/search?query=";
const key="0RiqcFgaUlkwzCgZcthZEPdOIuCBzNXK2ZUrpD6d9pkmjkUa7r2xV2oJ";
let flag=0;

const hehehehe=async (keyw)=>{
    console.log(keyw);
    let arr=document.getElementsByClassName("walle");
let promise=await fetch(`${URL}${keyw}&orientation=landscape`,{
    headers: {
      Authorization: `${key}`
    }
  })
let data= await promise.json();
for(let i=0;i<15;i++){
  arr[i].src=data.photos[i].src.large;
}
let b=document.getElementsByClassName("wallpaper");
b[0].style.display="flex";
b[0].style.animation="fadein 1s";
console.log(data);
let abc=document.getElementsByClassName("walle");
for(let i=0;i<abc.length;i++){
  console.log(abc[i]);
  abc[i].addEventListener("click", function () {
    var imageUrl = this.src;
    console.log(imageUrl);
    window.open(imageUrl);
  })
}
}
function wall(){
    if(cars[0].style.display=="flex"){
    cars[0].style.animation="down 1s";
    setTimeout(()=>{cars[0].style.display="none";},950);

}
if(a==1){
for(var i=0;i<jdm.length;i++){
    jdm[i].style.animation="fadeout .4s";
}
a=0;
setTimeout(() => {
    for(var i=0;i<jdm.length;i++){
        jdm[i].style.display="none";
    }
}, 400);
}
  let c=document.getElementsByClassName("wallpaper");
  let b=document.getElementById("search");
  console.log(b);
  if(flag==0){
    b.style.display="flex";
    b.style.animation="fadein 1s";
    flag=1;
  }
  else if(flag==1){
    b.style.animation="fadeout 1s";
    c[0].style.display="none";
    flag=0;
    setTimeout(()=>{
      b.style.display="none";
    },900);
  }
}
function getValue(){
    hehehehe(document.getElementById("srch").value);
}