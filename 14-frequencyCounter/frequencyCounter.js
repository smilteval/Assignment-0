function frequencyCounter(word) {
  // Insert code here;
  var letterfrequency = {};

  for(var i = 0; i < word.length; i++){
    var char = word.charAt(i);
    if(letterfrequency[char]){
      letterfrequency[char]++;
    }
    else{
      letterfrequency[char] = 1;
    }
  }

  return letterfrequency;
}

// Do not edit this line;
module.exports = frequencyCounter;