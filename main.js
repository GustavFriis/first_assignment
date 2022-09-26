// opgave 1

/* function degreesCelsius(degrees) {
    if (degrees < 10) {
        return "winter clothing";
    } else if (degrees >= 10 && degrees <= 20) {
        return "shirt and long pants";
    } else {
    return "t-shirt and shorts"}
}



const clothesToWear = degreesCelsius(21)
console.log(clothesToWear)

 */
// opgave 2
/*
function rollDice(rolls) {
     let amountOfSixes =0
     for (let i = 0; i < rolls; i++) {
          let diceRoll = Math.floor((Math.random() * 6) + 1)

          if (diceRoll === 6)
               console.log("you hit "+diceRoll,"!");
          if (diceRoll === 6) {
               amountOfSixes++
               if(amountOfSixes === diceRoll){
                    console.log("jackpot")
               }
          }
     }
}

rollDice(2)
*/
/*
// opgave 3
let score = 0
const positiveWords = ["happy","glad","amazing","awesome", "adorable", "brave", "cool", "positive"]
const negativeWords = ["anger","sad","depressed","ugly", "stupid", "weak", "negative", "abysmal", "awful"]
function getSentimentScore() {

// den måde jeg tror opgave 3 skal løses på er ved at lave et aray med forskellige positive ord og et med negative.
Derefter skal der laves en fucntion der kan tage det givede string og checke for ver gang et af orderne er i ens string
og derefter tælle dem sammen ved hjælp af loops. den skal give et + når der er et positivt ord og et - når der er et negativt
ord. Derefter skal den tage summen af de positive og negative værdier og give resultatet
}
 */