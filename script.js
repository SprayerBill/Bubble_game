
var timer = 60;
var hitvar=Math.floor(Math.random()*10);
var score=0;

function NewTimer() {
     setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerdiv").textContent = timer;
    }else if(timer==0){
        document.querySelector("#btm").innerHTML=``;
        document.querySelector("#btm").innerHTML+=`<h1>Game Over</h1>`
    }
  }, 1000);
}

function Bubblemaker(){
    document.querySelector("#btm").innerHTML=``;
    for(var i=1;i<145;i++){
        var rn=Math.floor(Math.random()*10);
        document.querySelector("#btm").innerHTML+=`<div class="bubble">${rn}</div>`;
    }
}

function HitValue(){
    hitvar=Math.floor(Math.random()*10);
    document.querySelector("#hitdiv").textContent=hitvar;
}

function GetScore(){
    document.querySelector("#btm").addEventListener("click",function(dets){
        if(dets.target!==document.querySelector("#btm")){
            if(Number(dets.target.innerHTML)===hitvar){
                document.querySelector("#scorediv").textContent=score+=10;
                Bubblemaker();
                HitValue();
               }else{
                Bubblemaker();
                HitValue();
               }
        }
 
    })

}

NewTimer();
Bubblemaker();
HitValue();
GetScore();
