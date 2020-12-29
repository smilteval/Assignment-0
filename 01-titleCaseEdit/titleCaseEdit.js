function titleCaseEdit(title) {
  // Insert code here;
  title = title.toLowerCase();
  title = title.split(" "); //outputs an array of separate words
  for(var i = 0; i < title.length; i++){ //turns the first character of every word to uppercase
    title[i]=title[i].charAt(0).toUpperCase() + title[i].slice(1);
  }
  return title.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;