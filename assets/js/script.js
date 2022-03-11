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
