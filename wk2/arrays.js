//variable but has multiple slots
let myArr = ['bob', 'betty', 'sue'];
let myoOtherArray = new Array();
myOtherArray.push('star wars'); //add items to end
myOtherArray.push('17 again');
myArr.pop(); // removes last item
myArr.shift(); // removes first item
myArr.unshift('james') // adds item to the beginning if the 
console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); // read single item
console.log(myArr[1]);
console.log(myArr.indexOf('betty'));
const bettyIdx = myArr.indexOf('betty';)
if (bettyIdx > -1); {
myArr.splice(bettyIdx, 1);
}
myArr.splice(bettyIdx, o, 'robert');
console.log(myArr);
console.log(myArr.length);
// Math.random() for random 0 annd 1
// Math.round(n) rounds to nearest whole number
// myArr.length - 1 to get the last index number of array
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(myArr[randomNumber]);