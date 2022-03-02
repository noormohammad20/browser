console.log('first')
console.log('second')
// const timeIntervalId = setInterval(() => {
//     console.log('Tik Tik Tik')
// }, 1000)
console.log('third')

let second = 0
const timeId = setInterval(() => {
    // second++
    console.log(++second)
    if (second > 15) {
        clearInterval(timeId)
    }
}, 1000)