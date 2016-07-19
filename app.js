"use strict"

var userName = prompt('What is your name?');

console.log('Greetings, ' + userName + '! It \'s nice to meet you. Let\'s answer some questions about me! Please answer with yes or no, or y or n');

var answerOne = prompt('Does Bronwyn ride a motorcycle?');


if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y') {
    console.log('That\'s right! Bronwyn does ride a motorcycle!')
} else {
    console.log('You must not have noticed the boots she\'s wearing today! She does ride a motorcycle!');
};
