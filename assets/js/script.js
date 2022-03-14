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

//var for counting through questions
var x = 0;

var score = 0;
var timerScore = 0;
var timer = 0;
var finalScore = 0;
var highscoreArray = [];

var gameEnded = false;

var body = document.body;
// setup header 
var headerElement = document.createElement("header");
body.appendChild(headerElement);
// setup main tag
var mainElement = document.createElement("main");
body.appendChild(mainElement);
mainElement.setAttribute("id","main-element");
// setup highscores button in header
var viewHighScores = document.createElement("p");
viewHighScores.textContent = "View high scores";
headerElement.appendChild(viewHighScores);
// setup timer in header
var timerText = document.createElement("p");
timerText.textContent = `Time: ${timer}`;
headerElement.appendChild(timerText);


//RESET MAIN AREA OF SCREEN FUNCTION
var screenReset = function(){
    var clearScreen = document.getElementById("main-content");
    clearScreen.remove();
    //mainElement = document.getElementById("main-holder");
    var mainContent = document.createElement("div");
    mainElement.appendChild(mainContent);
    mainContent.setAttribute("id","main-content");
    mainContent.setAttribute("class","main-content");   
};


// HIGHSCORE SCREEN
var highscoreDisplay= function(){
    //alert("Look at those scores!");
    screenReset();
    
};


// SCORE SAVING FUNCTION
var submitScore = function(event){
    event.preventDefault();
    var submitName = document.querySelector("#enter-name");
    var highscore = {
        uName: submitName.value,
        score: finalScore
    };
    highscoreArray = localStorage.getItem("highscores");

    if (highscoreArray){
        highscoreArray = JSON.parse(highscoreArray);   
    } else {
        highscoreArray = [];    
    };

    highscoreArray.push(highscore);
    highscoreArray = JSON.stringify(highscoreArray);
    localStorage.setItem("highscores", highscoreArray);
    
    highscoreDisplay();
};



// GAME OVER FUNCTION
var gameOver = function(){
    screenReset();
    //alert("The game has ended!");
    gameEnded = true;
    
    var mainContent = document.getElementById("main-content");

    var gameOverMsgTitle = document.createElement("h3");
    gameOverMsgTitle.setAttribute("id", "game-over-msg-title");
    gameOverMsgTitle.textContent = "Game Over Man!";
    mainContent.appendChild(gameOverMsgTitle);

    var gameOverMsg = document.createElement("p");
    gameOverMsg.setAttribute("id", "game-over-msg")
    gameOverMsg.textContent = `Correct Answers: ${score} x Time Bonus: ${timer}`;
    mainContent.appendChild(gameOverMsg);

    finalScore = score*timer;

    var finalScoreText = document.createElement("h4");
    finalScoreText.setAttribute("id","final-score");
    finalScoreText.textContent = `Your Final Score: ${finalScore}`;
    mainContent.appendChild(finalScoreText);   

    var scoreForm = document.createElement("form");
    scoreForm.setAttribute("id","score-form");
    scoreForm.setAttribute("class","score-form");
    mainContent.appendChild(scoreForm);
    // create input field and label
    var inputLabel = document.createElement("label");
    inputLabel.setAttribute("for","enter-name");
    inputLabel.textContent = "Enter initials:";
    scoreForm.appendChild(inputLabel);
    var enterName = document.createElement("input");
    enterName.setAttribute("name","enter-name");
    enterName.setAttribute("maxlength","3");
    enterName.setAttribute("id","enter-name");
    scoreForm.appendChild(enterName);
    // create submit button
    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("id","submit-btn");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    scoreForm.appendChild(submitBtn);
    // click listener on submit button
    scoreForm.addEventListener("submit", submitScore);
};

// DISPLAY IF ANSWERED QUESTION RIGHT OR WRONG
var answerMessage = function (message) {
    var checkExist = document.getElementById("feedback");

    if (checkExist){
        var feedback = document.getElementById("feedback");
        feedback.textContent = message;
        feedback.style.display = "block";
        setTimeout(function(){feedback.style.display = "none"}, 500); //got setTimeout from: https://www.codegrepper.com/code-examples/javascript/paragraph+to+disappear+after+5+secs+vanilla+js+w3schools      
    } else {
        var feedback = document.createElement("h3");
        feedback.textContent = message;
        feedback.style.display = "block";
        feedback.setAttribute("id","feedback");
        feedback.setAttribute("class","feedback");
        mainElement.appendChild(feedback);
        setTimeout(function(){feedback.style.display = "none"}, 500);
    }
};


// GAME FUNCTION - Cycles through questions
var game = function() {
    
    screenReset();
    
    var questionTitle = document.createElement("h2");
    questionTitle.textContent = allQuestions[x].question;
    
    var mainContent = document.getElementById("main-content");
    mainContent.appendChild(questionTitle);
    
    var questionList = document.createElement("ul");
    mainContent.appendChild(questionList);
    
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
            
            //alert("Correct answer!");
            x++;
            if (x<allQuestions.length){
                score++;
                game();
                answerMessage("Correct Answer!");   
            } else {
                score++;
                gameOver();
                answerMessage("Correct Answer!");              
            };
        }
        else {           
            //alert("Wrong answer!");
            x++;
            if (x<allQuestions.length){
                timer = timer-10;
                //timerText.textContent = `Time: ${timer}`;
                game();
                answerMessage("Incorrect Answer!");
            } else {
                timer = timer-10;
                //timerText.textContent = `Time: ${timer}`;
                gameOver();
                answerMessage("Incorrect Answer!");
            }           
        };
    });    
};


//TIMER COUNTDOWN FUNCTION
function timeCounter(){
    game();
    var countdown =setInterval(function(){
    
        if (timer<=0 || gameEnded === true){
            timerText.textContent = `Time: ${timer}`;
            if (timer<=0){
                timer=1;
            };
            timerScore = timer;
            clearInterval(countdown);
            gameOver();
            
        } else {
            timerText.textContent = `Time: ${timer}`;
            timer--;
        }
    }, 1000);
}

// START SCREEN FUNCTION
var startScreen = function() {
    // resets all counter variables
    x = 0;
    score = 0;
    timerScore = 0;
    timer = 0;
    finalScore = 0;
    gameEnded = false;
    
    // setup content div
    var mainContent = document.createElement("div");
    mainElement.appendChild(mainContent);
    mainContent.setAttribute("id","main-content");
    mainContent.setAttribute("class","main-content");
    
    // setup start page heading
    var heading = document.createElement("h1");
    heading.textContent = "Coding Quiz Challenge";
    // setup instructions text
    var instructions = document.createElement("p");
    instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    //setup start button
    var startButton = document.createElement("h2");
    startButton.textContent = "Start Quiz";
    startButton.setAttribute("id","start-button");
    startButton.setAttribute("class", "start-button");
    //populate start page content into mainContent div
    mainContent.appendChild(heading);
    mainContent.appendChild(instructions);
    mainContent.appendChild(startButton);  
    //ON BUTTON CLICK GOES TO GAME
    document.getElementById("start-button").addEventListener("click", timeCounter);
    timer = 30;
       
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
//      * Event listener for answer - identifies which answer clicked and whether right/wrong ✅ - minus time if wrong ✅
//      * Displays right/wrong for 0.5 seconds ✅
//      * Replaces question/answers with next question/answers until allQuestions cycled through ✅
// Final Score Function ✅
//      * Calculate final score ✅
//      * Displays final score ✅
//      * Asks user to enter initials ✅
//      * Submit button with even listener ✅
//      * Save score/initials to local storage when submit clicked ✅
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
