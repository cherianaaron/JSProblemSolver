/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Create a problem, display name and introduction,
// display initial and final states, and test the
// success method.
var pProblem = new PuzzleProblem();

displayText(pProblem.name);
newLine();

displayText(pProblem.introduction);
newLine();

displayText("Here is the start state:");
displayState(pProblem.currentState);
newLine();
assert("pProblem.success() == false");

displayText("Changing current state to final state.");
pProblem.currentState = pProblem.finalState;

displayText("Here is the final state:");
displayState(pProblem.currentState);
newLine();
assert("pProblem.success() == true");


