var randomNum = Math.floor(Math.random() * 9);

if (randomNum > 5) {
    console.log("Hello");
} else if (randomNum < 5) {
    console.log("Good bye");
} else {
    console.log("I win the lottery");
};


var randomNumOne = Math.floor(Math.random() * 9);
var randomNumTwo = Math.floor(Math.random() * 9);


if (randomNumOne > 5 && randomNumTwo > 5) {
    console.log("Hello");
} else if (randomNumOne < 5 && randomNumTwo < 5) {
    console.log("Good bye");
} else if (randomNumOne == 5 && randomNumTwo == 5) {
    console.log("I win the lottery");
} else {
    console.log("whoops I'm too diferent");
};


var randonNumThree = Math.floor(Math.random() * 5) + 1 ;

switch (randonNumThree) {
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
    case 3:
        console.log('Four');
        break;
    default:
      console.log('Five');
  }
  