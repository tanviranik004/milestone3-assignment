//convert feetToMile

function feetToMile(feet){

    var mile= feet/5280;
    return mile;

    }
    
    var outputMiles=feetToMile(2000);
    outputMiles=outputMiles.toFixed(5);
    console.log(outputMiles);


 //woodCalculator

function woodCalculator(chair, table, bedstead){

        //To make one chair need 1 cubic foot of wood.
        var chairCubicfeet= chair * 1;

        //To make one table need 3 cubic foot of wood.
        var tableCubicfeet= table * 3;

        //To make one bedstead need 5 cubic foot of wood.
        var bedsteadCubicfeet= bedstead * 5;
        
        var totalCubicfeet= chairCubicfeet + tableCubicfeet + bedsteadCubicfeet;
        return totalCubicfeet;

    }
        var totalwoodCubicfeet= woodCalculator(6, 3, 2);
        console.log(totalwoodCubicfeet, "Cubic feet");



    //brickCalculator

    function brickCalculator(floor) {
        let totalBricks
        let firstTotal
        let secondTotal
        if(floor <=10){
              totalBricks = floor * 15 * 1000;
          }
      
          else if (floor<=20) {
              firstTotal = 10 * 15 * 1000;
              totalBricks = firstTotal * 10 *  12 * 1000;
          } 
      
          else {
              firstTotal=10*15*1000;
              secondTotal=10*12*1000;
              totalBricks=firstTotal+secondTotal+(floor*10*1000);
          }
          return totalBricks;
      }
      console.log("Total Bricks: ",brickCalculator(10));

    //tinyFriend
    
function tinyFriend(strset) {
	let tinyFriend = ""
  for(let i = 0; i < strset.length; i++) {
  	if(i == 0) {
          tinyFriend = strset[i]
        }
  	if(strset[i].length < tinyFriend.length) {
    	tinyFriend = strset[i]
    }
  }
  return tinyFriend;
}
    let nameArray = ["Tanvir Anik", "Tanjim Alam", "Ek Raju", "Imran Hossain", "Onti", "Manum", "Zobayer"];
    console.log( "Tiny Friend is:", tinyFriend(nameArray));

