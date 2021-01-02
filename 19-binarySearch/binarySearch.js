class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var middle = Math.floor(nums.length/2);

    if (target == nums[middle]){
      return true;
    }

    else if(target > nums[middle]){
      return this.binarySearch(nums.slice(middle+1, nums.length), target);
    }

    else if(target < nums[middle]){
      return this.binarySearch(nums.slice(0,middle), target);
    }
    
    else{
      return false;
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;