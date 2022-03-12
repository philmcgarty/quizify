var questionAndAnswers1 = {
    question: "Which answer is correct1?",
    ans1: ["correct answer1", "correct"],
    ans2: ["incorrect answer", "incorrect"],
    ans3: ["incorrect answer", "incorrect"],
    ans4: ["incorrect answer", "incorrect"]
};
var questionAndAnswers2 = {
    question: "Which answer is correct2?",
    ans1: ["correct answer2", "correct"],
    ans2: ["incorrect answer", "incorrect"],
    ans3: ["incorrect answer", "incorrect"],
    ans4: ["incorrect answer", "incorrect"]
};
var questionAndAnswers3 = {
    question: "Which answer is correct3?",
    ans1: ["correct answer3", "correct"],
    ans2: ["incorrect answer", "incorrect"],
    ans3: ["incorrect answer", "incorrect"],
    ans4: ["incorrect answer", "incorrect"]
};
var questionAndAnswers4 = {
    question: "Which answer is correct4?",
    ans1: ["correct answer4", "correct"],
    ans2: ["incorrect answer", "incorrect"],
    ans3: ["incorrect answer", "incorrect"],
    ans4: ["incorrect answer", "incorrect"]
};

var allQuestions = [questionAndAnswers1, questionAndAnswers2, questionAndAnswers3, questionAndAnswers4];


//headerElement.appendChild(test2);
var screenReset = function(resetId){
    var clearScreen = document.getElementById("start-page");
    clearScreen.remove();
    mainElement = document.getElementById("main-holder");
    var mainContentElement = document.createElement("div");
    mainElement.appendChild(mainContentElement);
    mainContentElement.setAttribute("id",resetId);
    mainContentElement.setAttribute("class","main-content");
};


var game = function() {
    alert("Start Game?");
    // var clearScreen = document.getElementById("start-page");
    // clearScreen.remove();
    // mainElement = document.getElementById("main-holder");
    // var mainContentElement = document.createElement("div");
    // mainElement.appendChild(mainContentElement);

    
    // mainContentElement.setAttribute("id","question-page");
    // mainContentElement.setAttribute("class","main-content");
    screenReset("question-page");
};

var startScreen = function() {
    var timer = 0;

    var body = document.body;
    
    var headerElement = document.createElement("header");
    body.appendChild(headerElement);

    var mainElement = document.createElement("main");
    body.appendChild(mainElement);
    mainElement.setAttribute("id","main-holder");

    var mainContentElement = document.createElement("div");
    mainElement.appendChild(mainContentElement);
    mainContentElement.setAttribute("id","start-page");
    mainContentElement.setAttribute("class","main-content");

    var viewHighScores = document.createElement("p");
    viewHighScores.textContent = "View high scores";

    var timerText = document.createElement("p");
    timerText.textContent = `Time: ${timer}`;

    headerElement.appendChild(viewHighScores);
    headerElement.appendChild(timerText);

    var heading = document.createElement("h1");
    heading.textContent = "Coding Quiz Challenge";

    var instructions = document.createElement("p");
    instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    
    var startButton = document.createElement("h2");
    startButton.textContent = "Start Quiz";
    startButton.setAttribute("id","start-button");
    startButton.setAttribute("class", "start-button");


    mainContentElement.appendChild(heading);
    mainContentElement.appendChild(instructions);
    mainContentElement.appendChild(startButton);

    document.getElementById("start-button").addEventListener("click", game);

};

startScreen();

// TO DO
// Start Screen Function
//      * Displays heading, message, and start quiz button
//      * Event handler for start quiz button
// Game Function
//      * For loop to cycle through allQuestions array
//      * Displays question as heading, and 4 answers in ul
//      * Event listener for answer - identifies which answer clicked and whether right/wrong - minus time if wrong
//      * Displays right/wrong for 2 seconds
//      * Replaces question/answers with next question/answers until allQuestions cycled through
// Final Score Function
//      * Calculate final score
//      * Displays final score
//      * Asks user to enter initials
//      * Submit button with even listener
//      * Save score/initials to local storage when submit clicked
// High Score Function
//      * Recalls highscors/initials from local storage
//      * Displays highscores/initials

// OPTIMIZATIONS IF TIME
//      * Sort highscores in decending order
//      * Add alert that user will leave game if view high score button clicked during gameplay
//      * Allow only 3 characters for initials
//      * Improve scoring system
//      * Visual improvements e.g. fade text between screens
//      * Delete high scores button
//      * Randomize questions
