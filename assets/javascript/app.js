$(document).ready(function () {

    var totalTime = 180;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var timer;
    var currentTime = totalTime;

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
    //console.log(questions.length);

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
            //console.log(i);
            //console.log(question);
            //console.log(question.prompt);

            //creating new container for question
            var container = document.createElement("li");
            $(container).addClass("question-container");
            $(".questions").append(container);

            //adding question
            var prompt = document.createElement("h3");
            $(prompt).addClass("question");
            $(prompt).text(question.prompt);
            $(container).append(prompt);
            $(container).append("<br>");            

            //console.log(this.image !== "null");
            //image accompanying question
            //console.log(this.image);
            if (question.image !== null) {
                
                var picture = document.createElement("img");
                $(picture).addClass("picture");
                $(picture).attr("src", "assets/images/" + question.image);
                $(picture).attr("alt", question.caption);
                $(container).append("<br>");
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
                var htmlLine;
                //last question contains four images!
                //"<img src='assets/images/Interchange.jpg' alt='abstract brushstrokes' class='picture'>"
                // if(i === questions.length - 1) {
                //     var imgAnswer = document.createElement("img");
                //     $(imgAnswer).attr("src","assets/images/" + answerChoice);
                //     $(imgAnswer).addClass("picture");
                //     console.log(imgAnswer);
                //     htmlLine = radio + imgAnswer + "<br>";
                // } 
                // else {
                    htmlLine = radio + answerChoice;
                //}
               // console.log(radio + correctAnswer);
                $(answers).append(htmlLine);
                //for styling buttons later
                // var checkmark = "<span class='checkmark'></span>";
                // $(answers).append(checkmark);
                $(answers).append("<br>");
            }
            $(container).append(answers);
            $(container).append("<br>");
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

    //submission button, if user finishes early
    $(".submit").on("click", function() {
        clearInterval(timer);
        gameOver();
    });

    //takes user to results screen
    function gameOver() {
        $(".question-screen").hide();
        $("footer").hide();
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

    //resets the game 
    $(".reset").on("click",function() {
        totalTime = 180;
        correct = 0;
        wrong = 0;
        unanswered = 0;
        timer;
        currentTime = totalTime;

        //back to title screen
        $(".results").hide();
        $(".questions").empty();
        $(".opening-screen").show();
    });
});