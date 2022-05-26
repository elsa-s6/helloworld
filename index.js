function myDisplayer(some) {
  console.log(some);
};

async function myFunction(){

  let myPromise = new Promise(function(resolve, reject){
    let x = 1;

    if (x == 0) {
      resolve("OK");
    } else {
      reject("Error");
    }; 

  })

myDisplayer(await myPromise);

};

myFunction();
