let fo=document.getElementById('formc');
let fb=document.getElementById('forms');
let buttonb=document.getElementById('buttonb');
let buttont=document.getElementById('buttont');
let closesymbol=document.getElementsByName('closesymbol');
let closemenu=document.getElementsByName('closeMenu');
let ulmenu=document.getElementById('ulmenu');
let icon8=document.getElementByName('icon8');
let heartwhite=document.getElementByName('heartwhite');
let likewhite=document.getElementById('likewhite');
let coll=document.getElementById('coll');
buttont.onmouseenter=function(){
    fo.style.display="block";
}

closesymbol.onmouseenter=function(){
    fo.style.display="none";
}
function t(){
    fo.style.display="none";
    fb.style.display="none";
}
buttonb.onmouseenter=function(){
    fb.style.display="block";  
}
buttont.onmouseenter=function(){
    fo.style.display="block";  
}
function z(){
    fo.style.display="block";
}
function d(){
    fb.style.display="block";
}
function h(){
    if(ulmenu.style.display=="none")
   { ulmenu.style.display="block";}
    else{ulmenu.style.display="none";}
}
icon8.onclick=function(){
    ulmenu.style.display="block";
}
function o(){
    ulmenu.style.display="none";
}
function cardmenu(){
  if(this.style.src=="icons888-heart-100.png"){this.style.src="icons8-heart-100.png"}

}
coll.onscroll=function(){
    this.style.background="gold"
}