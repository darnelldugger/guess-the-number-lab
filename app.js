const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      // console.log(this.secretNum)
    do {
      this.prevGuesses.push(this.getGuess())
      console.log(this.prevGuesses)
      this.render()
    } while(this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
  },
  
  getGuess: function(){
    let input 
    do {
     input = parseInt(prompt( `Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    } while(input < this.smallestNum || input > this.biggestNum || isNaN(input))
    return input
  },
  
  render: function(){
  if(this.prevGuesses[this.prevGuesses.length -1] === this.secretNum){
    alert(`Congrats! You guessed the number in ${this.prevGuesses}!`)
  } else {
    alert(`Your guess is too high/low `)
  }
},
  
}
game.play()

