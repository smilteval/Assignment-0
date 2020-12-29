function countOfAllBooleans(arr) {
  // Insert code here;
  var boolCounter = 0;
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === "boolean"){
      boolCounter++;
    }
  }
  return boolCounter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;