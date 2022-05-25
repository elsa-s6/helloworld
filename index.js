// Task 9 

try{

  let randomNum = Math.floor((Math.random() * 9) + 1)

  switch (randomNum) {
    case 6:
      throw "Six";
      break;
    case 7:
      throw "Seven";
      break;
    case 8:
      throw "Eight";
      break;
    case 8:
      throw "Nine";
      break;
    default:
      console.log(`${randomNum}`)
  }
}catch (error){
	console.log(`${error}`); //print in the console the message from the error.
}finally{
	console.log("Good bye");
}

// Task 10 

class Game {
	constructor(name, platform, price){
		this.name = name;
		this.platform = platform;
		this.price = price;
	}

  addEuro(){
    return this.price++;
  };
}

let animalCrossing = new Game ("Animal Crossing", "Nintendo Switch", 60);
console.log(animalCrossing.platform);

let genshinImpact = new Game ("Genshin Impact", "Play Station 4, PC/Macintosh and iOS/Android", 0);
console.log(genshinImpact.platform);


animalCrossing.addEuro();
console.log(animalCrossing.price);

genshinImpact.addEuro();
console.log(genshinImpact.price);



// Task 11

function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 1;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
