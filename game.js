score = 0;
cross = true;
alert("Get ready to save your space-craft!")
document.onkeydown= function (e) {
    console.log("the code id: " , e.keyCode);
    if (e.keyCode==38) {
        green1 = document.querySelector('.green1');
        green1.classList.add('animateGreen1');
    setTimeout(() => {
        green1.classList.remove('animateGreen1');
    }, 700);
    }
    if (e.keyCode==39) {
        green1 = document.querySelector('.green1');
        green1X = parseInt( window.getComputedStyle(green1,null).getPropertyValue('left'));
        green1.style.left = (green1X+112) + "px";
}
if (e.keyCode==37) {
    green1 = document.querySelector('.green1');
    green1X = parseInt( window.getComputedStyle(green1,null).getPropertyValue('left'));
    green1.style.left = (green1X-112) + "px";
}
}
setInterval(() => {
    green1 = document.querySelector('.green1');
    gameOver = document.querySelector('.gameOver');
    obstacle= document.querySelector('.obstacle');
    reset = document.querySelector('#resetBtn');
 green1X = parseInt( window.getComputedStyle(green1,null).getPropertyValue('left'));
 green1Y = parseInt( window.getComputedStyle(green1,null).getPropertyValue('bottom'));
 obstacleX = parseInt( window.getComputedStyle(obstacle,null).getPropertyValue('left'));
 obstacleY = parseInt( window.getComputedStyle(obstacle,null).getPropertyValue('bottom'));
 offSetX = Math.abs(green1X-obstacleX);
 offSetY = Math.abs(green1Y-obstacleY);
    console.log(offSetX,offSetY);
    if (offSetX < 175 && offSetY < 69) {
    obstacle.classList.remove('obsani');
    gameOver.style.visibility = 'visible';
    reset.style.display = 'block';
}
else if (offSetX < 140 && cross) {
    score+=1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000)};
},100);
function updateScore(score) {
    scoreCont.innerHTML="Your Score : "+score;
};