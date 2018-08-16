// business logic
function isVowel(letter){
    if (letter === "a"|| letter === "e"|| letter === "i"|| letter === "o"|| letter === "u"|| letter === "y") {
      return true
    } else {
      return false
    }
  }
function isWord(userText) { //splits string into array seperated by the spaces
  return userText.split(" ")

}
var latinize = "" // this is the string we will be manipulate, then feed into a new array which is not defined yet
function firstword(firstarray) {
  latinize = firstarray.shift(0)
}
var i = 0
function firstVowel(workWith) { //checks for position of first vowel
  while(isVowel(workWith[i]) != true){
    i++
  }
  return i-1
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
  // console.log(isVowel("k"));;
});
