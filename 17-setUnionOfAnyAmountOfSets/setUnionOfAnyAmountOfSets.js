function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  
  var union = new Set();

  for(var i = 0; i < args.length; i++){
    args[i].forEach(union.add, union);
  }

  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;