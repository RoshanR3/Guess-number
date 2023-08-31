// document.querySelector('.number').textContent=30;
// document.querySelector('.score').textContent=9;
// document.querySelector('.guess').value=9;
// console.log(document.querySelector('.guess').value);

var number=Math.floor(Math.random()*20+1)
console.log(number)
var score=20;
var highscore=0;
var check=function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent="No number guessed";
    }
    else if(guess===number){
        document.querySelector('.message').textContent="You guessed it right";
        document.querySelector('.number').textContent=number;
        document.querySelector('body').style.backgroundColor="#50b884";
        document.querySelector('.number').style.width="40rem";
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess!==number){
        if(score>1){
            document.querySelector('.message').textContent=guess<number?"Too low":"Too high";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="You lose";
            document.querySelector('.score').textContent=0;
        }
    }
    // else if(guess<number){
    //     if(score>1){
    //         document.querySelector('.message').textContent="Too low";
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent="You lose";
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
    // else if(guess>number){
    //     if(score>1){
    //         document.querySelector('.message').textContent="Too high";
    //          score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent="You lose";
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
}
var again=function(){
    score=20;
    number=Math.floor(Math.random()*20+1)
    console.log(number)
    document.querySelector('body').style.backgroundColor="#222"
    document.querySelector('.number').textContent="?";
    document.querySelector('.number').style.width="15rem";
    guess=document.querySelector('.guess').value='';
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.score').textContent=20;    
}
document.querySelector('.check').addEventListener('click',check)
document.querySelector('.again').addEventListener('click',again)
document.addEventListener('keyup',function(event){
    if(event.key==="Enter"){
        check();
    }
    else if(event.key==="Escape"){
        again();
    }
})
