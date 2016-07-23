'use strict';

var score = 0;

//Begin first 5 questions of the guessing game
var userName = prompt('What is your name?');
alert('Greetings, ' + userName + '! It\'s nice to meet you. Let\'s answer some questions about Bronwyn! Please answer with yes or no, or y or n.');

//questionOne function is wrapped
function questionOne() {
  var answerOne = prompt('Does Bronwyn ride a motorcycle?');
  var responseOne = document.getElementById('responseOne');

  if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y') {
    responseOne.textContent = 'That\'s right! Bronwyn does ride a motorcycle!';
    score++;
  } else {
    responseOne.textContent = 'You must not have noticed the boots she\'s wearing today! She does ride a motorcycle!';
  };
}
questionOne();

// questionTwo function is wrapped
function questionTwo() {
  var answerTwo = prompt('Does Bronwyn have a daughter?');
  var responseTwo = document.getElementById('responseTwo');

  if (answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y') {
    responseTwo.textContent = 'You are correct! She does have a daughter.';
    score++;
  } else {
    responseTwo.textContent = 'You haven\'t been paying attention! She does have a daughter.';
  };
}
questionTwo();

// questionThree function is wrapped and ready
function questionThree() {
  var answerThree = prompt('Is Bronwyn a huge fan of Firefly/Serenity?');
  var responseThree = document.getElementById('responseThree');

  if (answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y') {
    responseThree.textContent = 'So you noticed the t-shirts! Yes, she is a Browncoat!';
    score++;
  } else {
    responseThree.textContent = 'Sorry, you got that one wrong. She\'s a huge fan of Firefly and Serenity.';
  };
}
questionThree();

// questionFour is wrapped and Ready
function questionFour() {
  var answerFour = prompt('Does Bronwyn own the best coffeehouse in Seattle?');
  var responseFour = document.getElementById('responseFour');

  if (answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y') {
    responseFour.textContent = 'Ah! So you\'ve been there! Glad you liked it!';
    score++;
  } else {
    responseFour.textContent = 'Clearly you haven\'t had a chance to visit yet.';
  };
}
questionFour();

// questionFive is wrapped and Ready....
function questionFive() {
  var answerFive = prompt('Is Bronwyn learning to code?');
  var responseFive = document.getElementById('responseFive');

  if (answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y') {
    responseFive.textContent = 'Why yes she is! That\'s why she\'s at CodeFellows!';
    score++;
  } else {
    responseFive.textContent = 'Got that wrong, mate. She\'s at CodeFellows to learn to code and launch a new career!';
  };
}
questionFive();

//Begin Question 6: guessing a number, in this case a year
//  questionSix is wrapped and Ready
function questionSix() {
  var businessYear = 2005;
  var guessYear = 0;

  while (guessYear < 4) {
    var answerSix = prompt('In what year was Wayward Coffeehouse established? Please answer with a 4-digit year.');
    if (isNaN(answerSix)) {
      alert('Sorry ' + userName + ', your answer is not a number. Please try again.');
      guessYear++;
    } else if (parseInt(answerSix.length) !== 4) {
      alert('Sorry ' + userName + ', your answer is not a 4-digit year. Please try again.');
      guessYear++;
    } else if (answerSix > businessYear && answerSix <= 2016) {
      alert('Wayward Coffeehouse has been around longer than that. Try again!');
      guessYear++;
    } else if (answerSix > 2016) {
      alert('That\'s in the future! There\'s been no break in the space time continuum. Please try again.');
      guessYear++;
    } else if (answerSix < businessYear) {
      alert('Wayward Coffeeouse is not quite that old yet. Try again!');
      guessYear++;
    } else if (parseInt(answerSix) === parseInt(businessYear)) {
      alert('You got that right! Wayward Coffeeouse opened in 2005.');
      score++;
      guessYear = 5;
    }
  }
}
questionSix();

// Begin Question 7: answer should be a string, use an array, six attempts
// questionSeven is wrapped and Ready
function questionSeven() {
  var countriesLived = ['australia', 'ireland', 'scotland', 'thailand'];
  var guessCountry = 0;

  while (guessCountry < 6) {
    var answerSeven = prompt('Name a country (other than the U.S.) where you think Bronwyn has lived.').toLowerCase();
    var foundAnswer = false;
    for (var i = 0; i < countriesLived.length; i++) {
  //    console.log(answerSeven, countriesLived[0]);
      if (answerSeven === countriesLived[i]) {
        foundAnswer = true;
      }
    }
    if (foundAnswer === true) {
      alert('Correct');
      score++;
      guessCountry = 6;
    } else {
      alert('Try again.');
      guessCountry++;
    }
  };

  if (score <= 7) {
    alert('Thanks for playing ' + userName + ', you got ' + score + ' out of 7!');
  };
}
questionSeven();
