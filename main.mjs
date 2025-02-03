import pkg from './knights.js'
const { Knight } = pkg


const player = new Knight([7, 7], [3, 4])

const result = player.moves()

console.log(`You made it in ${result.length -1} moves`)
console.log(`Here is your path:`)
result.forEach(element => {
    console.log(element)
});
