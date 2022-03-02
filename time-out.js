function doSomething() {
    console.log('I Am Coding JavaScript')
}

console.log('I Am The First Person')
console.log('I Am The Second Person')
// setTimeout(doSomething, 5000)
setTimeout(function () {
    console.log('exploring set time out')
}, 4000)
setTimeout(() => {
    console.log('I Am Using VS Code')
}, 5000)
console.log('I Am The Third Person')
console.log('I Am The Four Person')