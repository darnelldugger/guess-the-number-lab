const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.getGuess()
    } while(prevGuesses.push(input))

    // console.log(game.play.newGuess)
  },
  
  getGuess: function(){
    let input 
    do {
     input = prompt( `Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
    } while(input >= this.smallestNum || input <= this.biggestNum)
  },
  
  render: function(){
  if(input = this.secretNum){
    `Congrats! You guessed the number in ${this.prevGuesses}!`
  } else {
    `Your guess is too `
  }
},
  
}


