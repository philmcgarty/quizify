var questionAndAnswers1 = {
    question: "Which answer is correct1?",
    ans1: ["correct answer1", "correct"],
    ans2: ["incorrect answer1", "incorrecta"],
    ans3: ["incorrect answer1", "incorrectb"],
    ans4: ["incorrect answer1", "incorrectc"]
};
var questionAndAnswers2 = {
    question: "Which answer is correct2?",
    ans1: ["correct answer2", "correct"],
    ans2: ["incorrect answer2", "incorrecta"],
    ans3: ["incorrect answer2", "incorrectb"],
    ans4: ["incorrect answer2", "incorrectc"]
};
var questionAndAnswers3 = {
    question: "Which answer is correct3?",
    ans1: ["correct answer3", "correct"],
    ans2: ["incorrect answer3", "incorrecta"],
    ans3: ["incorrect answer3", "incorrectb"],
    ans4: ["incorrect answer3", "incorrectc"]
};
var questionAndAnswers4 = {
    question: "Which answer is correct4?",
    ans1: ["correct answer4", "correct"],
    ans2: ["incorrect answer4", "incorrecta"],
    ans3: ["incorrect answer4", "incorrectb"],
    ans4: ["incorrect answer4", "incorrectc"]
};

var allQuestions = [questionAndAnswers1, questionAndAnswers2, questionAndAnswers3, questionAndAnswers4];

var x = 0;

var score = 0;

//RESET MAIN AREA OF SCREEN
var screenReset = function(){
    var clearScreen = document.getElementById("main-content");
    clearScreen.remove();
    mainElement = document.getElementById("main-holder");
    var mainContentElement = document.createElement("div");
    mainElement.appendChild(mainContentElement);
    mainContentElement.setAttribute("id","main-content");
    mainContentElement.setAttribute("class","main-content");   
};

// GAME OVER FUNCTION
var gameOver = function(){
    screenReset();
    alert("The game has ended!");
    
    var mainContentElement = document.getElementById("main-content");

    var gameOverMsgTitle = document.createElement("h3");
    gameOverMsgTitle.textContent = "Game Over Man!";
    mainContentElement.appendChild(gameOverMsgTitle);

    var gameOverMsg = document.createElement("p");
    gameOverMsg.textContent = `Your final score is: ${score}`;
    mainContentElement.appendChild(gameOverMsg);

};

// DISPLAY IF ANSWERED QUESTION RIGHT OR WRONG
var answerMessage = function (message) {
    var checkExist = document.getElementById("feedback");
    if (checkExist){
        var feedback = document.getElementById("feedback");
        feedback.textContent = message;
        feedback.setAttribute("id","feedback");
        feedback.setAttribute("class","feedback");

    } else {
        var feedback = document.createElement("h3");
        feedback.textContent = message;
        feedback.setAttribute("id","feedback");
        feedback.setAttribute("class","feedback");
        var mainHolder = document.getElementById("main-holder");
        mainHolder.appendChild(feedback);
    }
};


// GAME FUNCTION - Cycles through questions
var game = function() {
    
    screenReset();
    
    var questionTitle = document.createElement("h2");
    questionTitle.textContent = allQuestions[x].question;
    
    var mainContentElement = document.getElementById("main-content");
    mainContentElement.appendChild(questionTitle);
    
    var questionList = document.createElement("ul");
    mainContentElement.appendChild(questionList);
    
    var answerListItem1 = document.createElement("li");
    answerListItem1.textContent = allQuestions[x].ans1[0];
    answerListItem1.setAttribute("data-answer",allQuestions[x].ans1[1]);   
    questionList.appendChild(answerListItem1);

    var answerListItem2 = document.createElement("li");
    answerListItem2.textContent = allQuestions[x].ans2[0];
    answerListItem2.setAttribute("data-answer",allQuestions[x].ans2[1]);
    questionList.appendChild(answerListItem2);

    var answerListItem3 = document.createElement("li");
    answerListItem3.textContent = allQuestions[x].ans3[0];
    answerListItem3.setAttribute("data-answer",allQuestions[x].ans3[1]);
    questionList.appendChild(answerListItem3);

    var answerListItem4 = document.createElement("li");
    answerListItem4.textContent = allQuestions[x].ans4[0];
    answerListItem4.setAttribute("data-answer",allQuestions[x].ans4[1]);
    questionList.appendChild(answerListItem4);

    questionList.addEventListener("click", function(event) {
        var chosenAnswer = event.target;
        //console.log(chosenAnswer);

        if (chosenAnswer.dataset.answer === "correct"){
            
            alert("Correct answer!");
            x++;
            if (x<allQuestions.length){
                game();
                answerMessage("Correct Answer!");
                score++;
            } else {
                gameOver();
                answerMessage("Correct Answer!");
                score++;
            };
        }
        else {
            
            alert("Wrong answer!");
            x++;
            if (x<allQuestions.length){
                game();
                answerMessage("Incorrect Answer!");
            } else {
                gameOver();
                answerMessage("Correct Answer!");
            }
            
        };

    });    
};




// Right/Wrong answer function
// Create text
// Display text
// overwrite text after a second


// START SCREEN FUNCTION
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
    mainContentElement.setAttribute("id","main-content");
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
    
    //ON BUTTON CLICK GOES TO GAME
};

// FUNCTION CALL TO BEGIN APP
startScreen();

// TO DO
// Start Screen Function ✅
//      * Displays heading, message, and start quiz button ✅
//      * Event handler for start quiz button ✅
// Game Function
//      * Loop to cycle through allQuestions array ✅
//      * Displays question as heading, and 4 answers in ul ✅
//      * Event listener for answer - identifies which answer clicked and whether right/wrong ✅ - minus time if wrong
//      * Displays right/wrong for 2 seconds
//      * Replaces question/answers with next question/answers until allQuestions cycled through ✅
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
