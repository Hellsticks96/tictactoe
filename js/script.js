let fieldstatus = [];

let shapestatus = 'cross';

function logShape(i){
    if(shapestatus == 'cross'){
        shapestatus = 'circle';
        document.getElementById(`circle-${i}`).classList.remove('hide');
        document.getElementById('player2').classList.remove('player-inactive');
        document.getElementById('player1').classList.add('player-inactive');
    }else {
        shapestatus = 'cross';
        document.getElementById(`cross-${i}`).classList.remove('hide');
        document.getElementById('player1').classList.remove('player-inactive');
        document.getElementById('player2').classList.add('player-inactive');
    }

    fieldstatus[i] = shapestatus;

    console.log(fieldstatus);
    checkForWin();
}

function checkForWin(){
    checkForThree(0, 1, 2);
    checkForThree(3, 4, 5);
    checkForThree(6, 7, 8);
    checkForThree(0, 3, 6);
    checkForThree(1, 4, 7);
    checkForThree(2, 5, 8);
    checkForThree(0, 4, 8);
    checkForThree(2, 4, 6);
}

function checkForThree(a, b, c){
    if(fieldstatus[a] == fieldstatus[b] && fieldstatus[b] == fieldstatus[c] && fieldstatus[a]){
        console.log('Winner:'+fieldstatus[a]);
    }
}