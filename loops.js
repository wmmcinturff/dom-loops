//console.log("Loopy")
"use strict";

const colors = ['yellow', 'blue', 'green', 'red']

const colorLoop = () => {
    let domString = '';
    for(let i= 0; i < colors.length; i++) {
        domString += `<h1> ${colors[i]}</h1>`
    }
console.log(domString)
}
colorLoop()