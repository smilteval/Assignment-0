function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var oddNumCounter = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] % 2 != 0){
      oddNumCounter++;
    }
  }
  return oddNumCounter++;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;