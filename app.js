"use strict"

var userName = prompt('What is your name?');

console.log('Greetings, ' + userName + '! It \'s nice to meet you. Let\'s answer some questions about Bronwyn! Please answer with yes or no, or y or n.');

var answerOne = prompt('Does Bronwyn ride a motorcycle?');

if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y') {
    document.write('That\'s right! Bronwyn does ride a motorcycle!')
} else {
    document.write('You must not have noticed the boots she\'s wearing today! She does ride a motorcycle!');
};

var answerTwo = prompt('Does Bronwyn have a daughter?');

if (answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y') {
    alert('You are correct! She does have a daughter.');
} else {
    alert('You haven\'t been paying attention! She does have a daughter.');
};

var answerThree = prompt('Is Bronwyn a huge fan of Firefly/Serenity?');

if (answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y') {
    document.write('So you noticed the t-shirts! Yes, she is a Browncoat!');
} else {
    document.write('Sorry, you got that one wrong. She\'s a huge fan of Firefly and Serenity.');
};

var answerFour = prompt('Does Bronwyn own the best coffeehouse in Seattle?');

if (answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y') {
    console.log('Ah! So you\'ve been there! Glad you liked it!');
} else {
    console.log('Clearly you haven\'t had a chance to visit yet.');
};

var answerFive = prompt('Is Bronwyn learning to code?');

if (answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y') {
    alert('Why yes she is! That\'s why she\'s at CodeFellows!');
} else {
    alert('Got that wrong, mate. She\'s at CodeFellows to learn to code and launch a new career!')
};
