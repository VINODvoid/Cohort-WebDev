//  Promises is an object that represents the eventual completion ( or Failure ) of an asynchronous operation and its resulting value .


// Callback Approach 
// function main()
// {
//     console.log("Hello");
    
// }

// setTimeout(main,3000);


// Promised Approach 

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
// setTimeoutPromisified(3000)
// .then(callback)




// function promiseCallback(resolve)
// {
//     setTimeout(resolve,3000);
// }
// promiseCallback(function(){
//     console.log("3 seconds passed.");
    
// });

