var userName = prompt("What is your name?")

console.log('Greetings, ' + userName + '! It \'s nice to meet you. Let\'s answer some questions about me! Please answer with yes or no, or y or n');

var answerOne = prompt("Does Bronwyn ride a motorcycle?");

answerOne.toLowerCase();

if (answerOne = 'yes' || answerOne = 'y') {
    alert('That\'s right! Bronwyn does ride a motorcycle!')
} else {
    alert('You must not have noticed the boots she\'s wearing today! She does ride a motorcycle!');
}
