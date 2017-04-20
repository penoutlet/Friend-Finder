var friendsArray =[1,2,3,4,5,6,7,8];
var answersArray = [2,4,5,2,1,6,7,7];


function sumCompatibilityScore(AnswersArray) {
 var compatibilityScore = 0;
  var compatibilityComponent = 0;
  var compatibilityArray = [];
    
    // loop function for finding compatible people.

      for (var i = 0; i < friendsArray.length; i++) {
          if ((answersArray[i] - friendsArray[i]) < 0){
            compatibilityComponent = (answersArray[i]- friendsArray[i])*-1; 
          compatibilityArray.push(compatibilityComponent);

  }
          else {
          compatibilityComponent = (answersArray[i]- friendsArray[i]); 
          compatibilityArray.push(compatibilityComponent);

  }
};


var compatibilityScore = compatibilityArray.reduce(add, 0);

function add(a, b) {
    return a + b;
}

        console.log(compatibilityArray);
        console.log(compatibilityScore);
};
sumCompatibilityScore();
