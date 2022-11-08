//const prompt = require("prompt-sync")({ sigint: true });

//let input = prompt("Please Provide input ? ");

let input ='Furqan'
let shift =3
let resultarray=[];

console.log(input)
// let code = input.charCodeAt(4) + shift
//      console.log(code)
//      resultarray.push(String.fromCharCode(code))
//      console.log(resultarray)

for (let i=0; i < input.length ; i++) {
    
    let code = input.charCodeAt(i) + shift

    // console.log(code)
     
resultarray.push(String.fromCharCode(code))
resultarray.join("");
    
}
console.log(resultarray.join(""))