// import functions and grab DOM elements
import {countsAsAYes} from './utils.js'
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const button = document.getElementById('quizButton'); 
const results = document.getElementById('quizResults');

button.addEventListener('click', ()=>{

const chosenName = prompt('Hi, please enter preferred name.');

const yesContinue = confirm(`Thanks, ${chosenName}, do you want to take the quiz?`)
if(!yesContinue){ 
alert ('no');
return; 
}

let rightAnswers = 0;

const answer1 = prompt('Is my favorite place New Zealand?');
if (!countsAsAYes(answer1)){rightAnswers++
}


const answer2 = prompt('Does Mia dislike hiking?');
if (!countsAsAYes(answer2)){rightAnswers++
}

const answer3 = prompt('Is Tegucicalpa the capital of Honduras');
if (countsAsAYes(answer3)){rightAnswers++
}

alert(`Thanks ${chosenName}.`);
results.textContent = `${chosenName} your results are: ${rightAnswers}/3 correct`;
});

resetButton.addEventListener('click',()=>{
  window.location.reload();
});