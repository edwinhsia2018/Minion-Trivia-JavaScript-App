$(document).ready(function() {

    //variables
    var questionsArr = ["What does every minion wear on their head?", "How many fingers do minions have?", "What language do minions speak?", "What's a minion's favorite fruit?", "Why are evil minions purple?", "What character helped to inspire minions?", "What chemical turns a minion evil?"];
    var answersArr = [["Bandanas","Goggles","Hats","Wigs"], ["One","Two","Three","Four"], ["English", "Minionish", "JavaScript","Minionese"], ["Durian","Apples","Bananas","Tomatoes"],["Opposite color spectrum","Color of royalty","Just looks evil and cool","Producer and designer spilled grape juice"],["Smurfs", "Lemmings", "Pokemon", "Jawas"], ["Mutagen PX-41", "Mutagen P-90X","Mutagen T25", "Mutagen Insanity"]];
    var rightAns = ["Goggles","Three", "Minionese", "Bananas", "Opposite Color Spectrum", "Oompa Loompas","Mutagen PX-41"];
    var correctAns = 0;
    var wrongAns = 0;
    var skippedQuestions = 0;
    var questionId = 0;

    //Store answers
    $('button').on('click', function(){
        var userAnswer = $(this).text();
        checkAnswer ();
    });
    
    //timers
    var count=15;
    var intervalId;
    function clock() {
        intervalId = setInterval(timer, 1000);
    }
    function timer (){
        count--;
        $("#show-time").html("Time Remaining: " + count);
        if (count <= 0) {
            skippedQuestions++;
            clearInterval(intervalId);
            nextQuestion();
        }
    }

    $("#game-start").html("Click to Start!");

    //Start Game
    $("#game-start").on("click", function(){
        $("#trivia-question").text(questionsArr[questionId]);
        $("#answer1").html(answersArr[questionId][0]);
        $("#answer2").html(answersArr[questionId][1]);
        $("#answer3").html(answersArr[questionId][2]);
        $("#answer4").html(answersArr[questionId][3]);
        clock ();
        $("#game-start").html("");
    })

    //countdown function that goes to the next problem
    function nextQuestion () {
        if (questionId < questionsArr.length) {
            questionId++;
            $("#trivia-question").text(questionsArr[questionId]);
            $("#answer1").html(answersArr[questionId][0]);
            $("#answer2").html(answersArr[questionId][1]);
            $("#answer3").html(answersArr[questionId][2]);
            $("#answer4").html(answersArr[questionId][3]);
            count = 16;
            clock ();
        }
       else {
           gameOver ();
       }
    }

    //check if answer is correct
    var checkAnswer = function () {
        if (userAnswer == correctAns[questionId]) {
            correctAns++;
            nextQuestion();
        }
        else {
            wrongAns++;
            nextQuestion();
        }
    }

    //Gameover.  Tally and display scores
    function gameOver (){
        $("#correct-answers").html("Correct answers: " + correctAns);
        $("#wrong-answers").html("Wrong answers: " + wrongAns);
        $("#skipped-questions").html("Skipped questions: " + skippedQuestions);
        clearInterval(intervalId);
    }
});
