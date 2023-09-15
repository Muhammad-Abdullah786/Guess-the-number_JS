
console.log("Guess the Number Between 1 tot 100")
const random = () => {
  return Math.random() * 100;
}
let a;
let chances = 0;
let num = random(1, 100)
num = Number.parseInt(num)
a = Number.parseInt(a)
// console.log(num)
while (a != num){
  a = prompt("enter your guess!!  :")
  if (a < num) {
    console.log("the orignal number is larger \n try again!")
  }
  else if (a > num) {
    console.log("the orignal number is smaller \n try again")
  }
  else {
    console.log("your guess is correct!! \n Congratulation  ")
  }
  
  chances = chances + 1;
}

console.log("Number of Guess:: "+ chances);
