// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // will not do the indent that is needed due to ESlint.
const button = document.getElementById('quizButton'); 
const results = document.getElementById('quizResults');
const resetButton = document.getElementById('reset');
// this button, when clicked, allows the user to start the quiz.
button.addEventListener('click', ()=>{

  //This is the prompted for the name of user.
    const chosenName = prompt('Hi, please enter preferred name.');
// This allows for the computer to read the user's name. 
    const yesContinue = confirm(`Thanks, ${chosenName}, do you want to take the quiz?`);
    if (!yesContinue){ 
        alert ('no');
        return; 
    }
// these are the prompts for the questions and the user can choose yes or no.
    let rightAnswers = 0;

    const answer1 = prompt('Is my favorite place New Zealand?');
    if (!countsAsAYes(answer1)){rightAnswers++;
    }


    const answer2 = prompt('Does Mia dislike hiking?');
    if (!countsAsAYes(answer2)){rightAnswers++;
    }

    const answer3 = prompt('Is Tegucicalpa the capital of Honduras');
    if (countsAsAYes(answer3)){rightAnswers++;
    }

    alert(`Thanks ${chosenName}.`);
    results.textContent = `${chosenName} your results are: ${rightAnswers}/3 correct`;
});

resetButton.addEventListener('click', ()=>{
    window.location.reload();
});