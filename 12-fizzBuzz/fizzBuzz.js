function fizzBuzz(start, end) {
  // Insert code here;
  var arr = [];

  for (var i = start; i <= end; i++){
    if(i % 15 == 0){
      arr.push("FizzBuzz");
    }
    else if(i % 5 == 0){
      arr.push("Buzz");
    }
    else if(i % 3 == 0){
      arr.push("Fizz");
    }
    else{
      arr.push(i);
    }
  }
  
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;