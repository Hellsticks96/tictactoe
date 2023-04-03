let fieldstatus = [];

let shapestatus = 'cross';

let gameover = false;

function logShape(i) {
    if (!fieldstatus[i] && !gameover) {
        if (shapestatus == 'cross') {
            shapestatus = 'circle';
            document.getElementById(`circle-${i}`).classList.remove('hide');
            document.getElementById('player2').classList.remove('player-inactive');
            document.getElementById('player1').classList.add('player-inactive');
        } else {
            shapestatus = 'cross';
            document.getElementById(`cross-${i}`).classList.remove('hide');
            document.getElementById('player1').classList.remove('player-inactive');
            document.getElementById('player2').classList.add('player-inactive');
        }
    };

    fieldstatus[i] = shapestatus;
    checkForWin();
}

function checkForWin() {
    checkForThree(0, 1, 2);
    checkForThree(3, 4, 5);
    checkForThree(6, 7, 8);
    checkForThree(0, 3, 6);
    checkForThree(1, 4, 7);
    checkForThree(2, 5, 8);
    checkForThree(0, 4, 8);
    checkForThree(2, 4, 6);
}

function checkForThree(a, b, c) {
    let winline = document.getElementById(`winline${a}${b}${c}`);

    if (fieldstatus[a] == fieldstatus[b] && fieldstatus[b] == fieldstatus[c] && fieldstatus[a]) {
        gameover = true;
        endScreen();
        if(winline.getAttribute('style').indexOf('transform: rotate(-45deg)') != -1){
            console.log('dia-neg');
            winline.style.transform = 'rotate(-45deg) scaleX(1)';
        }else{
            if(winline.getAttribute('style').indexOf('transform: rotate(45deg)') != -1){
                console.log('diagonal');
                winline.style.transform = 'rotate(45deg) scaleX(1)';
            }else{
                if(winline.classList.contains('make-vertical')){
                    console.log('vertical');
                    winline.style.transform = 'rotate(90deg) scaleX(1)';
                }else {
                    console.log('horizontal');
                    winline.style.transform = 'scaleX(1)';                    
                }
            }
        }   
    }
}

function restart(){
    gameover = false;
    fieldstatus = [];
    resetWinlines();

    for(let i = 0; i < 9; i++){
        document.getElementById('circle-' + i).classList.add('hide');
        document.getElementById('cross-' + i).classList.add('hide');
    };

    setTimeout(function(){
    document.getElementById('gameover').classList.add('hide');
    document.getElementById('restartbutton').classList.add('hide');
    }, 1000);
}

function resetWinlines(){
    document.getElementById('winline012').style.transform = ('scaleX(0)');
    document.getElementById('winline345').style.transform = ('scaleX(0)');
    document.getElementById('winline678').style.transform = ('scaleX(0)');
    document.getElementById('winline036').style.transform = ('scaleX(0)');
    document.getElementById('winline147').style.transform = ('scaleX(0)');
    document.getElementById('winline258').style.transform = ('scaleX(0)');
    document.getElementById('winline048').style.transform = ('rotate(45deg) scaleX(0)');
    document.getElementById('winline246').style.transform = ('rotate(-45deg) scaleX(0)');
}

function endScreen(){
    setTimeout(function(){
        document.getElementById('gameover').classList.remove('hide');
        document.getElementById('restartbutton').classList.remove('hide');
    }, 1000);
}