function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var matchCounter = 0;
  for(var i = 0; i < nums.length; i++){
    if(i == nums[i]){
      matchCounter++;
    }
  }
  return matchCounter;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;