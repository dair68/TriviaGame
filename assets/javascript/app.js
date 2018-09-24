$(document).ready(function () {
    var totalTime = 30;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var timer;
    var currentTime = totalTime;

    var questions = [
        {
            prompt: "What is the name of this famous painting by Edvard Munch?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Fear",
                "The Howl",
                "The Scream",
                "A Man's Cry"],
            correctAnswer: "The Scream"
        },
        {
            prompt: "Which of these was NOT an era during Pablo Picasso's lifetime?",
            image: null,
            caption: null,
            answerChoices: [
                "Blue Period",
                "Rose Period",
                "African Period",
                "Heart Period"],
            correctAnswer: "Heart Period"
        },
        {
            prompt: "Which of these movements attempted to capture the movement of changing light via swift thin brush strokes?",
            image: null,
            caption: null,
            answerChoices: [
                "Surrealism",
                "Impressionism",
                "Realism",
                "Romanticism"],
            correctAnswer: "Impressionism"
        },
        {
            prompt: "Which of these artists is famous for paintings that play with perspective and intertwine objects into patterns?",
            image: null,
            caption: null,
            answerChoices: [
                "M.C. Escher",
                "Vincent Van Gogh",
                "Pablo Picasso",
                "Bob Ross"],
            correctAnswer: "M.C. Escher"
        },
        {
            prompt: "Which of these female artists is NOT from the 20th century?",
            image: null,
            caption: null,
            answerChoices: [
                "Georgia O'Keefe",
                "Frida Kahlo",
                "Dorothy Tanning",
                "Saint Catherine of Bologna"],
            correctAnswer: "Saint Catherine of Bologna"
        },
        {
            prompt: "Which of these is NOT the name of a Teenage Mutant Ninja Turtle?",
            image: null,
            caption: null,
            answerChoices: [
                "Leonardo",
                "Raphael",
                "Masaccio",
                "Dontello"],
            correctAnswer: "Masaccio"
        }
    ];
    //console.log(questions.length);

    //implementing start button
    $(".start").on("click", function () {
        //starting countdown
        startTimer();

        //exiting start screen, entering questions
        $(".opening-screen").hide();
        $(".questions").show();

        //displaying questions to the screen
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            //console.log(question);
            //console.log(i);
            //console.log(question);
            //console.log(question.prompt);

            //creating new container for question
            var container = document.createElement("div");
            $(container).addClass("question-container");
            $(".questions").append(container);

            //adding question
            var prompt = document.createElement("h3");
            $(prompt).addClass("question");
            $(prompt).text(question.prompt);
            $(container).append(prompt);

            //console.log(this.image !== "null");
            //image accompanying question
            //console.log(this.image);
            if (question.image !== null) {
                
                var picture = document.createElement("img");
                $(picture).addClass("picture");
                $(picture).attr("src", "assets/images/" + question.image);
                $(picture).attr("alt", question.caption);
                $(container).append(picture);
            }
            
            //creating answer container
            var answers = document.createElement("form");
            $(answers).addClass("answers");

           //console.log(question.prompt);

            //adding answer choices
            for(var j=0; j<question.answerChoices.length; j++) {
                //var answer = document.createElement("div");
                //$(answer).addClass("answer-choice");
                var radio = "<input type='radio' name='answer-choice' class='answer' ";
                //$(answer).attr("type","radio");
                //$(answer).attr("name","answer-choice");
                var answerChoice = question.answerChoices[j];
                radio = radio + "value='" +  answerChoice + "' ";
                var correctAnswer = question.correctAnswer;
                radio = radio + "data-correct='" + correctAnswer + "'>";
               
                //$(answer).attr("value",question.correctAnswer);

                //$(answers).append(answer);
                //$(answer).text(question.answerChoices[i]);
                //$(".answer").html(radio+correctAnswer+"'>" +answerChoice + "<br>");
                var htmlLine = radio + answerChoice + "<br>"
               // console.log(radio + correctAnswer);
                $(answers).append(htmlLine);
            }
            $(container).append(answers);
            //console.log(i);
        }
    });

    //starts the timer
    function startTimer() {
        //console.log(currentTime);
        $(".time").text(currentTime);
        timer = setInterval(updateTime, 1000);
    }

    //updates the time displayed on the screen
    function updateTime() {
        currentTime--;
        $(".time").text(currentTime);

        //out of time
        if(currentTime === 0) {
            clearInterval(timer);
            gameOver();
        }
    }

    //takes user to results screen
    function gameOver() {
        $(".questions").hide();
        $(".results").show();
        console.log("Results");
        //figuring out which answer choices were selected
        $(".answer").each(function() {
            if (this.checked === true)
            {
                //console.log($(this).attr("value"));
                var selectedChoice = $(this).attr("value");
                var correctChoice = $(this).attr("data-correct");
                console.log(selectedChoice);
                console.log(correctChoice);
                console.log(selectedChoice === correctChoice);
                //correct answer
                if(selectedChoice === correctChoice) {
                    correct++;
                }
                //incorrect answer
                else {
                    wrong++;
                }
            }
        });

        //unanswer questions = total # questions - correct answers - wrong answers
        unanswered = questions.length - correct - wrong;
        console.log(correct);
        console.log(wrong);
        console.log(questions.length);
        
        //showing the results to the screen
        $(".num-correct").text(correct);
        $(".num-wrong").text(wrong);
        $(".num-unanswered").text(unanswered);
    }   
});