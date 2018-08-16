// business logic
function isVowel(letter){
  if (letter === "a"|| letter === "e"|| letter === "i"|| letter === "o"|| letter === "u"|| letter === "y") {
    return true
  } else {
    return false
  }
}
var userInputs = []
function inputArray(userText) { //splits string into array seperated by the spaces
  userInputs = userText.split(" ")

}
var latinizedWord = "" // this is the string we will be manipulate, then feed into a new array which is not defined yet
function userWord() {
  return .shift(0)
}
var i = 0
function firstVowel(workWith) { //checks for position of first vowel
  while(isVowel(workWith[i]) != true){
    if(workWith[i] === "q" && workWith[i+1] === "u"){
      i++
      // console.log(i);
    }
    i++
    // console.log(i)
  }
  return i
}
var finalOutput = []
function chopFront(takenWord) { //take user input and slice to the index
  var sliceHere = firstVowel(takenWord)
  var hackedBegin = (takenWord.slice(0, sliceHere))
  return takenWord.slice(sliceHere, -0) + hackedBegin + "ay"
  console.log(hackedBegin);
}

function appendWay(word) {
  word + "way"
}
function appendAy(word) {
  word + "ay"
}
function sortingHat(word) {
  if (word.length === 1) {
    appendAy(word)
  } else if (firstVowel(word) === 0) {
    appendWay(word)
  } else if (firstVowel(word) > 0) {
    chopFront(word)
  }
}
function finalLatin() {
  finalOutput.push(sortingHat())
}
// (/\W/g.test())


// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();


    // var year = parseInt($("input#year").val());
    // var result = leapYear(year);
    //
    // $(".year").text(year);
    //
    // if(!result) {
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }
    //
    // $("#result").show();

    // console.log(isWord($("#input").val()));
  });
  console.log(firstVowel("squeal"));
  // console.log(isVowel("k"));;
});
