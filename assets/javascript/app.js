$(document).ready(function () {

    var totalTime = 150;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var timer;
    var currentTime = totalTime;
    //for storing which questions answered correctly/incorrectly/unanswered
    var results = [];

    var questions = [
        {
            prompt: "What is the name of this iconic painting by Edvard Munch?",
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
            prompt: "Which of these attempt to capture the dynamics of light via swift thin brush strokes?",
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
            prompt: "Which artist is famous for paintings that play with perspective and intertwine objects into patterns?",
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
            prompt: "Georgia O'Keefe's famous flower paintings have been speculated to be symbolic of female parts.",
            image: null,
            caption: null,
            answerChoices: [
                "True",
                "False"],
            correctAnswer: "True"
        },
        {
            prompt: "Which of these is NOT the name of a Teenage Mutant Ninja Turtle?",
            image: null,
            caption: null,
            answerChoices: [
                "Leonardo",
                "Raphael",
                "Giovanni",
                "Donatello"],
            correctAnswer: "Giovanni"
        },
        {
            prompt: "What is the name of this oft-parodied painting by Grant Wood?",
            image: "American Gothic.jpg",
            caption: "Woman and man with pitchfork in front of house",
            answerChoices: [
                "American Gothic",
                "Forlorn Farmers",
                "Country Folk",
                "Odd Couple"],
            correctAnswer: "American Gothic"
        },
        {
            prompt: "Michelangelo is famous for painting the ceiling of the ",
            image: null,
            caption: null,
            answerChoices: [
                "Hagia Sophia",
                "Sistine Chapel",
                "Notre Dame",
                "St. Paul's Cathedral"],
            correctAnswer: "Sistine Chapel"
        },
        {
            prompt: "Vincent Van Gogh only sold one painting within his lifetime.",
            image: null,
            caption: null,
            answerChoices: [
                "True",
                "False"],
            correctAnswer: "True"
        },
        {
            prompt: "What is the name of the woman in this familiar painting?",
            image: "Mona Lisa.jpg",
            caption: "smiling woman",
            answerChoices: [
                "Mona Lisa",
                "Lisa Gherardini",
                "Lady Monalisse",
                "her name is unknown"],
            correctAnswer: "Lisa Gherardini"
        },
        {
            prompt: "In 1917, Marcel Duchamp submitted a sculpture of _______ to the Society of Independent Artists.",
            image: null,
            caption: null,
            answerChoices: [
                "a dog eating from a plate of spaghetti",
                "a house ruined by an earthquake",
                "a gaunt child",
                "a toilet"],
            correctAnswer: "a toilet"
        },
        {
            prompt: "In Rene Magritte's self-portrait The Son of Man, the subject's face is covered by a(n)",
            image: null,
            caption: null,
            answerChoices: [
                "apple",
                "lemon",
                "bouquet",
                "pair of shades"],
            correctAnswer: "apple"
        },
        {
            prompt: "The most popular depiction of Jesus Christ--a young man with long hair and a beard--was originally inspired by old paintings of ",
            image: null,
            caption: null,
            answerChoices: [
                "Moses",
                "Zeus",
                "Ra",
                "Apollo"],
            correctAnswer: "Zeus"
        },
        {
            prompt: "Which of these artists created 32 paintings of Campbell's Soup Cans?",
            image: null,
            caption: null,
            answerChoices: [
                "Jasper Johns",
                "Robert Rauschenberg",
                "Andy Warhol",
                "Sid Maurer"],
            correctAnswer: "Andy Warhol"
        },
        {
            prompt: "Which painting contains the face of the following woman?",
            image: "Venus.jpg",
            caption: "porcelein-skinned lady with golden curly hair",
            answerChoices: [
                "Whistler's Mother",
                "The Birth of Venus",
                "Lady with an Ermine",
                "Head of a Woman"],
            correctAnswer: "The Birth of Venus"
        },
        {
            prompt: "Where was Vincent Van Gogh's The Starry Night painted?",
            image: null,
            caption: null,
            answerChoices: [
                "His home studio",
                "On top of a hill",
                "A mental institution",
                "Atop a clock tower"],
            correctAnswer: "A mental institution"
        },
        {
            prompt: "Who sculpted The Thinker?",
            image: null,
            caption: null,
            answerChoices: [
                "Octavian Rodin",
                "Auguste Rodin",
                "November Rodin",
                "December Rodin"],
            correctAnswer: "Auguste Rodin"
        },
        {
            prompt: "The small triangular object at the center right of The Great Wave off Kanagawa is Mt. Fuji.",
            image: "Wave.jpg",
            caption: "Giant wave crashes around vessels",
            answerChoices: [
                "True",
                "False"],
            correctAnswer: "True"
        },
        {
            prompt: "Which of these artists was depicted in the Pixar film Coco?",
            image: null,
            caption: null,
            answerChoices: [
                "Pablo Picasso",
                "Frida Kahlo",
                "Salvador Dali",
                "Francisco Goya"],
            correctAnswer: "Frida Kahlo"
        },
        {
            prompt: "Which is these is the most expensive painting ever sold, as of 2017?",
            image: null,
            caption: null,
            answerChoices: [
                "Interchange by Willem de Kooning",
                "When Will You Marry? by Paul Gauguin",
                "The Card Players by Paul Gauguin",
                "Salvator Mundi by Leonardo da Vinci"],
            correctAnswer: "Salvator Mundi by Leonardo da Vinci"
        }
    ];

    //implementing start button
    $(".start").on("click", function () {
        //starting countdown
        startTimer();

        //exiting start screen, entering questions
        $(".opening-screen").hide();
        $(".question-screen").show();
        $("footer").show();

        //displaying questions to the screen
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            //console.log(question);
            //console.log(question.prompt);

            //creating new container for question
            var container = $("<li>");
            $(container).addClass("question-container");
            $(".questions").append(container);

            //adding question
            var prompt = $("<h3>");
            $(prompt).addClass("question");
            $(prompt).text(question.prompt);
            $(container).append(prompt);
            $(container).append("<br>");

            //image accompanying question
            if (question.image !== null) {

                var picture = document.createElement("img");
                $(picture).addClass("picture");
                $(picture).attr("src", "assets/images/" + question.image);
                $(picture).attr("alt", question.caption);
                $(container).append("<br>");
                $(container).append(picture);
            }

            //creating answer container
            var answers = $("<form>");
            $(answers).addClass("answers");

            //adding answer choices
            for (var j = 0; j < question.answerChoices.length; j++) {
                var radio = "<input type='radio' name='answer-choice' class='answer-question-" + i + "'";
                var answerChoice = question.answerChoices[j];
                radio = radio + "value='" + answerChoice + "' ";
                var correctAnswer = question.correctAnswer;
                radio = radio + "data-correct='" + correctAnswer + "'>";

                //making answer as the correct choice if applicable 
                if ($(radio).attr("value") === $(radio).attr("data-correct")) {
                    $(radio).addClass("correct-answer");
                }

                var htmlLine;
                htmlLine = radio + answerChoice;
                $(answers).append(htmlLine);
                $(answers).append("<br>");
            }
            $(container).append(answers);
            $(container).append("<br>");
        }
    });

    //starts the timer
    function startTimer() {
        $(".time").text(currentTime);
        timer = setInterval(updateTime, 1000);
    }

    //updates the time displayed on the screen
    function updateTime() {
        currentTime--;
        $(".time").text(currentTime);

        //out of time
        if (currentTime === 0) {
            clearInterval(timer);
            gameOver();
        }
    }

    //submission button, if user finishes early
    $(".submit").on("click", function () {
        clearInterval(timer);
        gameOver();
    });

    //takes user to results screen
    function gameOver() {
        $(".question-screen").hide();
        $("footer").hide();
        $(".results").show();
       
        //figuring out which answer choices were selected
        for (var i = 0; i < questions.length; i++) {
            var questionAnswered = false;
            $(".answer-question-" + i).each(function () {
                if (this.checked === true) {
                    var selectedChoice = $(this).attr("value");
                    var correctChoice = $(this).attr("data-correct");
                    // console.log(selectedChoice);
                    // console.log(correctChoice);
                    
                    //correct answer
                    if (selectedChoice === correctChoice) {
                        questionAnswered = true;
                        correct++;
                        results.push("correct");
                    }
                    //incorrect answer
                    else {
                        questionAnswered = true;
                        wrong++;
                        results.push("incorrect");
                    }
                }
            });
            //question unanswered
            if (questionAnswered === false) {
                results.push("unanswered")
            }
        }

        //unanswer questions = total # questions - correct answers - wrong answers
        unanswered = questions.length - correct - wrong;
        
        //showing the results to the screen
        $(".num-correct").text(correct);
        $(".num-wrong").text(wrong);
        $(".num-unanswered").text(unanswered);
    }

    //resets the game 
    $(".reset").on("click", function () {
        totalTime = 150;
        correct = 0;
        wrong = 0;
        unanswered = 0;
        timer;
        currentTime = totalTime;
        results = [];

        //back to title screen
        $(".results").hide();
        $(".questions").empty();
        $(".opening-screen").show();
        $(".detailed-results").empty();
    });

    //allows user to see which questions they got correct
    $(".details").on("click", function () {
        //checking if detailed results already shown
        if ($('.detailed-results').is(':empty')) {
            for (var i = 0; i < questions.length; i++) {
                //displays questions to screen and color-codes them
                var questionNumber = i + 1;
                var questionResult = document.createElement("div");
                var text = questionNumber + "."
                $(questionResult).text(questionNumber + ".");
                var result = results[i];
                //correct answer
                if (result === "correct") {
                    //color-coding number green
                    $(questionResult).attr("style", "color:green");
                }
                //incorrect answer
                else if (result === "incorrect") {
                    //color-coding number red
                    $(questionResult).attr("style", "color:red");
                }
                //unanswered
                else {
                    $(questionResult).attr("style", "color:blue");
                }

                $(".detailed-results").append(questionResult);
                //setting mouse cursor back to normal
                $(".details").attr("cursor","default");
                //console.log(questionResult);
            }
        }
    });
});