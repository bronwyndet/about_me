"use strict"

var userName = prompt('What is your name?');

console.log('Greetings, ' + userName + '! It \'s nice to meet you. Let\'s answer some questions about Bronwyn! Please answer with yes or no, or y or n.');

var answerOne = prompt('Does Bronwyn ride a motorcycle?');

if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y') {
    console.log('That\'s right! Bronwyn does ride a motorcycle!')
} else {
    console.log('You must not have noticed the boots she\'s wearing today! She does ride a motorcycle!');
};

var answerTwo = prompt('Does Bronwyn have a daughter?');

if (answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y') {
    console.log('You are correct! She does have a daughter.');
} else {
    console.log('You haven\'t been paying attention! She does have a daughter.');
};

var answerThree = prompt('');

if (answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y') {
    console.log('');
} else {
    console.log('');
};

var answerFour = prompt('');

if (answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y') {
    console.log('');
} else {
    console.log('');
};
