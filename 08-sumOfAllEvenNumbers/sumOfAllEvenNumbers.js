function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  var evenNumCounter = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0){
      evenNumCounter++;
    }
  }
  return evenNumCounter++;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;