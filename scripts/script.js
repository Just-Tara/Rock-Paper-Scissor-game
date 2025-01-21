
        let score =
        JSON.parse(localStorage.getItem('score')) ||{
            wins: 0,
            loses: 0,
            ties: 0    
        };
    
updateScoreElement();

// It can also be written as if(!score)

/*if (score === null ) {
score = {
    wins: 0,
    loses: 0,
    ties: 0
};
    }*/

    function playGame(playerMove) {

    const computerMove = pickComputerMove();
    let result = '';
    
     if (playerMove === 'scissors') {

        if (computerMove === 'scissors') {
            result = 'Tie';
         }
        else if(computerMove ==='paper') {
        result = 'You win good job';
        }
        else if ( computerMove === 'rock') {
        result = 'You lose better lock next time';
    
         }

    }

    else if(playerMove === 'paper'){
        
        if  (computerMove === 'paper') {
                result = 'Tie';
        }
        else if(computerMove ==='rock') {
            result = 'You win good job'
        }
        else if ( computerMove === 'scissors') {
        result = 'You lose better lock next time';
        }
        
    }else{
        if (computerMove === 'rock') {
                result = 'Tie';
        }
        else if(computerMove ==='scissors') {
            result = 'You win good job'
        }
        else if ( computerMove === 'paper') {
           result = 'You lose better lock next time';
        }
    }
    if (result === 'You win good job') {
        score.wins +=1;
    }else if (result === 'You lose better lock next time') {
        score.loses +=1;
    }else if (result === 'Tie') {
        score.ties +=1;
    }
   

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
  
    document.querySelector('.js-result')
    .innerHTML = result;
    
    document.querySelector('.js-moves')
    .innerHTML =
    ` You
            <img src="images/${playerMove}-emoji.png"
            alt="player-move-images" class="move-icon">
            <img src="images/${computerMove}-emoji.png" 
             alt="computer-move-images" class="move-icon">
            Computer`;

    }
    function updateScoreElement(params) {
        document.querySelector('.js-score')
        .innerHTML =`Wins:${score.wins}, Loses:${score.loses}, 
        Ties:${score.ties}.`;

    }
        
    function pickComputerMove() {
            
     let computerMove = '';

    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {             
            computerMove = 'paper';
    }
    else if(randomNumber >= 2 / 3 && randomNumber <= 1) {
            computerMove = 'scissors';
       
        }  
    return computerMove;
    }

    
