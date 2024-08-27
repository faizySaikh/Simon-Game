let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"]

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started ==false){
        console.log("Game started");
        started=true;

        levelUp();
    } 
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash")
    },1000);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },500);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText=`Game Over ! Your score was ${level} \n press any key to restart`;
        reset();
    }
}

function btnpress(){
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor)

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress)
}

function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
}