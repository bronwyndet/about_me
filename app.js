'use strict';

var userName = prompt('What is your name?');

// console.log('Greetings, ' + userName + '! It \'s nice to meet you. Let\'s answer some questions about Bronwyn! Please answer with yes or no, or y or n.');
//
// var answerOne = prompt('Does Bronwyn ride a motorcycle?');
//
// var testOne = document.getElementById('testOne');
//
// if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y') {
//   testOne.textContent = 'That\'s right! Bronwyn does ride a motorcycle!';
// } else {
//   testOne.textContent = 'You must not have noticed the boots she\'s wearing today! She does ride a motorcycle!';
// };
//
// var answerTwo = prompt('Does Bronwyn have a daughter?');
//
// if (answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y') {
//   alert('You are correct! She does have a daughter.');
// } else {
//   alert('You haven\'t been paying attention! She does have a daughter.');
// };
//
// var answerThree = prompt('Is Bronwyn a huge fan of Firefly/Serenity?');
//
// if (answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y') {
//   document.write('So you noticed the t-shirts! Yes, she is a Browncoat!');
// } else {
//   document.write('Sorry, you got that one wrong. She\'s a huge fan of Firefly and Serenity.');
// };
//
// var answerFour = prompt('Does Bronwyn own the best coffeehouse in Seattle?');
//
// if (answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y') {
//   console.log('Ah! So you\'ve been there! Glad you liked it!');
// } else {
//   console.log('Clearly you haven\'t had a chance to visit yet.');
// };
//
// var answerFive = prompt('Is Bronwyn learning to code?');
//
// if (answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y') {
//   alert('Why yes she is! That\'s why she\'s at CodeFellows!');
// } else {
//   alert('Got that wrong, mate. She\'s at CodeFellows to learn to code and launch a new career!')
// };

//begin Question 6: guessing a number, in this case a year
var businessYear = 2005;
var i = 0;

while (i < 4) {
  var answerSix = prompt('In what year was Wayward Coffeehouse established? Please answer with a 4-digit year.')
  if (isNaN(answerSix)) {
    alert('Sorry ' + userName + ', your answer is not a number. Please try again.');
    i++;
  } else if (parseInt(answerSix.length) !== 4) {
    alert('Sorry ' + userName + ', your answer is not a 4-digit year. Please try again.');
    i++;
  } else if (answerSix > businessYear && answerSix <= 2016) {
    alert('Wayward Coffeehouse has been around longer than that. Try again!');
    i++;
  } else if (answerSix > 2016) {
    alert('That\'s in the future! There\'s been no break in the space time continuum. Please try again.');
    i++;
  } else if (answerSix < businessYear) {
    alert('Wayward Coffeeouse is not quite that old yet. Try again!');
    i++;
  } else if (parseInt(answerSix) === parseInt(businessYear)) {
    alert('You got that right! Wayward Coffeeouse opened in 2005.');
    i = 5;
  }
}

//Question 7, answer should be a string, use an array, six attempts
