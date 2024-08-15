
let scoreCard = document.getElementById('js-score');
let scoreCard2 = document.getElementById('js-score2');
let score = 0;
let score2 = 0;



function scoreOne() {
   score += 1;
   scoreCard.innerText = score;
}
function scoreTwo(){
    score += 2;
   scoreCard.innerText = score;
}
function scoreThree(){
    score += 3;
    scoreCard.innerText = score;
}


function scoreOne2() {
   score2 += 1;
   scoreCard2.innerText = score2;
}
function scoreTwo2(){
    score2 += 2;
   scoreCard2.innerText = score2;
}
function scoreThree2(){
    score2 += 3;
    scoreCard2.innerText = score2;
}


let reset = document.getElementsByClassName('js-start')[0];
function resetButton(){
    checkWinner();
    checkWinner2();
    score = 0;
    score2  = 0;
    scoreCard.innerText = '0';
    scoreCard2.innerText = '0';

}


let winnerClass = document.getElementById('winner');
let winnerClass2 = document.getElementById('winner2');

function checkWinner(){
    if(score > score2){
        winnerClass.innerText = 'Winner!'
    } 
}
function checkWinner2(){
    if (score < score2) {
        winnerClass2.innerHTML = 'Winner!'
    }
}

// setTimeout(()=>{
//     html.remove();
// })