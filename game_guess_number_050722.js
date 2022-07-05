function guessnumber() 
{ 
  let maxnumber, randomNumber;
  maxnumber = prompt("Enter the max number ");
  randomNumber = Math.floor(Math.random()*maxnumber);
  let count = 0;
  
  let i = 1;
  while (i <= 3) 
  {
    let playerNumber = prompt("Enter your number here: ");
    count ++;
    i++
  
    if (randomNumber == playerNumber) {
      alert("congratulation");
      break;
    } else 
    {
    alert("please enter your number again.");
    }

    if (count == 3) {
      alert("Game Over! You only can input 3 times");
      break;
    }
  } 

}