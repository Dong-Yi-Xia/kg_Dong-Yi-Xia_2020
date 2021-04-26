const args = process.argv;

// let numbers = args.slice(2).map(n => parseInt(n))

// for very large string number to number
let numbers = args.slice(2).map(numStr => {
    let num = 0
    for(let i of numStr){
        let n = parseInt(i)
        num = (num * 10 ) + n
    }
    return num
})


module.exports = numbers
