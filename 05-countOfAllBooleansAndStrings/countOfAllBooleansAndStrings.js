function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var boolAndStringCounter = 0;
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == "boolean" || typeof arr[i] == "string"){
      boolAndStringCounter++;
    }
  }
  return boolAndStringCounter;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;