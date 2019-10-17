var tsdh=document.querySelector('.tsdh');
var gnfw=document.querySelector('.gnfw');  
var box2=document.querySelector('.more-conbox2');
var box1=document.querySelector('.more-conbox1');
   gnfw.onclick=function(){
      box2.style.display='block'
      box2.style.backgroundColor='#fff'
      box1.style.display='none'
      gnfw.style.backgroundColor='#5f646e'
      gnfw.style.color='white'
      tsdh.style.backgroundColor='#fff'
      tsdh.style.color='#5f646e'
      tsdh.style.marginTop='0'
      tsdh.style.marginLeft='0'
    };
    tsdh.onclick=function(){
        box2.style.display='none'
        // box2.style.backgroundColor='#fff'
        box1.style.display='block'
        gnfw.style.backgroundColor='#fff'
        gnfw.style.color='#5f646e'
        tsdh.style.backgroundColor='#5f646e'
        tsdh.style.color='#fff'
        gnfw.style.marginRight='0'
        gnfw.style.marginTop='0'
      }