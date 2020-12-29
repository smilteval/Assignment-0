function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var smallerCounter = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] < target){
      smallerCounter++;
    }
  }
  return smallerCounter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;