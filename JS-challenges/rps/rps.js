const rps = (p1, p2) => {
    // return p1 == 'rock' && p2 == 'paper'
    // || p1 == 'scissors' && p2 =='rock' 
    // || p1 == 'paper' && p2 == 'scissors' ? 'Player 2 won!' : 
    // p1 == 'paper' && p2 == 'rock' 
    // || p1 == 'rock' && p2 =='scissors' 
    // || p1 == 'scissors' && p2 == 'paper' ? 'Player 1 won!' : 'Draw!'

    return p1 == 'rock' && p2 == 'paper'
    || p1 == 'scissors' && p2 =='rock' 
    || p1 == 'paper' && p2 == 'scissors' ? 'Player 2 won!' : 
    p1 === p2 ? 'Draw!' : 
    'Player 1 won!'
  };
  console.log(rps('rock', 'scissors'));
  console.log(rps('paper', 'rock'));
  console.log(rps('scissors', 'rock'));
  console.log(rps('rock', 'rock'));