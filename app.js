'use strict';

var score = 0;

// Greeting, solicit user's name
var userName = prompt('What is your name?');
var responseGreeting = document.getElementById('responseGreeting');

responseGreeting.textContent = 'Greetings, ' + userName + '! It\'s nice to meet you. Let\'s answer some questions about Bronwyn! Please answer with yes or no, or y or n.';


// // Question 1
// function questionOne() {
//   var answerOne = prompt('Does Bronwyn ride a motorcycle?');
//   var responseOne = document.getElementById('responseOne');
//
//   if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y') {
//     responseOne.textContent = 'That\'s right! Bronwyn does ride a motorcycle!';
//     score++;
//   } else {
//     responseOne.textContent = 'You must not have noticed the boots she\'s wearing today! She does ride a motorcycle!';
//   };
// }
// questionOne();
//
// // Question 2
// function questionTwo() {
//   var answerTwo = prompt('Does Bronwyn have a daughter?');
//   var responseTwo = document.getElementById('responseTwo');
//
//   if (answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y') {
//     responseTwo.textContent = 'You are correct! She does have a daughter.';
//     score++;
//   } else {
//     responseTwo.textContent = 'You haven\'t been paying attention! She does have a daughter.';
//   };
// }
// questionTwo();
//
// // Question 3
// function questionThree() {
//   var answerThree = prompt('Is Bronwyn a huge fan of Firefly/Serenity?');
//   var responseThree = document.getElementById('responseThree');
//
//   if (answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y') {
//     responseThree.textContent = 'So you noticed the t-shirts! Yes, she is a Browncoat!';
//     score++;
//   } else {
//     responseThree.textContent = 'Sorry, you got that one wrong. She\'s a huge fan of Firefly and Serenity.';
//   };
// }
// questionThree();
//
// // Question 4
// function questionFour() {
//   var answerFour = prompt('Does Bronwyn own the best coffeehouse in Seattle?');
//   var responseFour = document.getElementById('responseFour');
//
//   if (answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y') {
//     responseFour.textContent = 'Ah! So you\'ve been there! Glad you liked it!';
//     score++;
//   } else {
//     responseFour.textContent = 'Clearly you haven\'t had a chance to visit yet.';
//   };
// }
// questionFour();
//
// // Question 5
// function questionFive() {
//   var answerFive = prompt('Is Bronwyn learning to be a great front end developer/programmer?');
//   var responseFive = document.getElementById('responseFive');
//
//   if (answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y') {
//     responseFive.textContent = 'Why yes she is! That\'s why she\'s at CodeFellows!';
//     score++;
//   } else {
//     responseFive.textContent = 'You may think she's already a great programmer, but actually she\'s at CodeFellows to learn programming and to launch her new career!';
//   };
// }
// questionFive();
//
// //Question 6
// function questionSix() {
//   var businessYear = 2005;
//   var guessYear = 0;
//   var responseSix = document.getElementById('responseSix');
//
//   while (guessYear < 4) {
//     var answerSix = prompt('In what year was Wayward Coffeehouse established? Please answer with a 4-digit year.');
//     if (isNaN(answerSix)) {
//       alert('Sorry ' + userName + ', your answer is not a number. Please try again.');
//       guessYear++;
//     } else if (parseInt(answerSix.length) !== 4) {
//       alert('Sorry ' + userName + ', your answer is not a 4-digit year. Please try again.');
//       guessYear++;
//     } else if (answerSix > businessYear && answerSix <= 2016) {
//       alert('Wayward Coffeehouse has been around longer than that. Try again!');
//       guessYear++;
//     } else if (answerSix > 2016) {
//       alert('That\'s in the future! There\'s been no break in the space time continuum. Please try again.');
//       guessYear++;
//     } else if (answerSix < businessYear) {
//       alert('Wayward Coffeeouse is not quite that old yet. Try again!');
//       guessYear++;
//     } else if (guessYear === 4) {
//       responseSix.textContent = 'You\'re of attempts. Actually, Wayward Coffeehouse opened in 2005.';
//     } else if (parseInt(answerSix) === parseInt(businessYear)) {
//       responseSix.textContent = 'You got that right! Wayward Coffeehouse opened in 2005.';
//       score++;
//       guessYear = 5;
//     }
//   }
// }
// questionSix();

// Question 7
function questionSeven() {
  var countriesLived = ['australia', 'ireland', 'scotland', 'thailand'];
  var guessCountry = 0;
  var responseSeven = document.getElementById('responseSeven');
  var responseScore = document.getElementById('responseScore');
  var foundAnswerTwo = false;

  while (guessCountry < 6 && foundAnswerTwo === false) {
    var answerSeven = prompt('Name a country (other than the U.S.) where you think Bronwyn has lived.').toLowerCase();
    var foundAnswer = false;

    for (var i = 0; i < countriesLived.length; i++) {
  //    console.log(answerSeven, countriesLived[0]);
      if (answerSeven === countriesLived[i]) {
        foundAnswer = true;
      }
      if (parseInt(guessCountry) === 5) {
        foundAnswerTwo = true;
      }
    }
    if (foundAnswer === true) {
      responseSeven.textContent = 'You got one, ' + userName + '! ' + 'Bronwyn has lived in Australia, Ireland, Scotland, and Thailand.';
      score++;
      guessCountry = 7;
    } else if (foundAnswerTwo === true) {
      console.log(foundAnswerTwo);
      responseSeven.textContent = 'Sorry, ' + userName + ', you\'ve used all you attempts without guessing one! Bronwyn has lived in Australia, Ireland, Scotland, and Thailand.';
    } else {
      guessCountry++;
      alert('You have used ' + guessCountry + ' attempts out of 6 total.');
    }
  };

  if (score <= 7) {
    responseScore.textContent = 'Thanks for playing, ' + userName + '. You got ' + score + ' out of 7!';
  };
}
questionSeven();
