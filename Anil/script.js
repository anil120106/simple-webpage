/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
// const car=['bwm','volvo','bmw','swift']
// for (let i=0;i<car.length;i++){
//   console.log(car[i])
// }

const clactip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bill = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
]
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
    const tip = clactip(bill[i])
    tips.push(tip)
    totals.push(tip + bill[i])
}
console.log(bill, tips, totals);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips))


//the while loop 
for(let rep =1; rep<=10;rep++){
    console.log(`lifting weights repetition ${rep}`)
}

let dice =Math.trunc(Math.random()*6)+1;

while (dice!==6){
    console.log(`you rolled a ${dice}`);
    dice= Math.trunc(Math.random()*6)+1;
    if(dice===6)console.log('loop is about to end.....')
}