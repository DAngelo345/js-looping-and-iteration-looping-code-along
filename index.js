// Code your solutions in this file
function writeCards( Array, event ) {
    let thankYouCards = []
    for ( let i = 0; i < Array.length; i++ ) {
      thankYouCards.push( `Thank you, ${Array[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  

 
  function countDown( integer ) {
      while (integer > 0) {
          console.log( integer );
          integer -= 1;
      }
      console.log(integer);
  }

//   function countDown( startingNumber ) {
//     while ( startingNumber > 0 ) {
//       console.log( startingNumber );
//       startingNumber -= 1;
//     }
//     console.log( startingNumber );
//   }