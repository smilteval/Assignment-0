function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1){
    throw "the array doesn't have at least two elements";
  }

  for(var i = 0; i < nums.length; i++){
    for(var j = 1; i < nums.length; i++){
      if (nums[i] + nums[j] == target){
        return true;
      }
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;