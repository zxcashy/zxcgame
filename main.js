
function start(){
document.getElementById("startText").classList.add("hideBlock");
document.getElementById("startButton").classList.add("hideBlock");

document.getElementById("question").classList.remove("hideBLock");
document.getElementById("question").innerHTML="Попытка"+stage+":"+middle;

document.getElementById("small").classList.remove("hideBLock");
document.getElementById("bingo").classList.remove("hideBLock");
document.getElementById("big").classList.remove("hideBLock");
}

function smallClick(){
max=middle;
middle=Math.floor((min+max)/2);
if (max==middle){
    middle -=1;
}
checkGame();
}
function bigClick(){
    min=middle;
middle=Math.floor((min+max)/2);
if (min==middle){
    middle +=1;
}
checkGame();
}
function bingoClick(){
    max=middle;
    min=middle;
    checkGame();
}
function checkGame(){
    if (min==max){
        document.getElementById("question").innerHTML="Вы загадали число" +min;
        document.getElementById("small").classList.add("hideBLock");
document.getElementById("bingo").classList.add("hideBLock");
document.getElementById("big").classList.add("hideBLock");
return;
    }
    stage+=1;
    if (stage==8){
        document.getElementById("question").innerHTML="Жульничать-нехорошо!";
    }
    document.getElementById("question").innerHTML="Попытка" +stage+":"+middle;
}
let min=0;
let max=100;
let middle=Math.floor((min+max)/2);
let stage=1;

