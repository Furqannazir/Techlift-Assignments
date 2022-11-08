const prompt = require("prompt-sync")({ sigint: true });
console.log("How much amount do you have");
var coin = prompt();
var coins=[25,10,5,1];
console.log(`You have ${coin} amount.`);
console.log('Available Coins for change',coins)

let quarter = Math.floor(coin/25);
    coin -= 25*quarter
    //console.log(quarter)
   // console.log(coin)

    let dime = Math.floor(coin/10);
    coin -= 10*dime
   // console.log(dime)
   // console.log(coin)

let nickel = Math.floor(coin/5);
    coin -= 5*nickel
    
    //console.log(nickel)
//console.log(coin)

let penny = coin;

    

    let totalCoinsUsed = quarter + dime + nickel + penny;

    console.log(`coin of 25 : ${quarter}, coin of 10: ${dime}, coin of 5: ${nickel} coin of 1: ${penny},\n Total number of coins used is ${totalCoinsUsed}`)

   

// console.log('hello');
/*function rot13(str) {
    
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");
  };

  rot13("SERR CVMMN!");
*/
