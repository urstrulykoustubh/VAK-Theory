//this would be the object shape for storing the questions
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "When I operate new equipment I generally:",
        optionA: "will read the instructions first",
        optionB: "listen to an explanation from someone who has used it before",
        optionC: "go ahead and have a go, I can figure it out as I use it",
    },

    {
        question: "When I need directions for travelling I usually:",
        optionA: "i will look at a map",
        optionB: "i will ask someone for spoken directions",
        optionC: "i will follow my nose and maybe use a compass",

    },

    {
        question: "When I cook a new dish, I like to:",
        optionA: "I will follow a written recipe",
        optionB: "i will call a friend or relative or parent for an explanation",
        optionC: "testing as I cook the dishes, i will follow my instincts",

    },

    {
        question: "If I am teaching someone something new, I tend to :",
        optionA: "I will demonstrate first and then let them give it a try",
        optionB: "i will give them a verbal explanation",
        optionC: "i will write instructions down for them",

    },

    {
        question: "Whenever any discussion happens,I tend to say :",
        optionA: "watch how I do it",
        optionB: "listen to me what i explain",
        optionC: "you should give it a try",

    },

    {
        question: "During my free time I mostly enjoy :",
        optionA: "going to museums and galleries",
        optionB: "listening to music and talking to my friends",
        optionC: "playing sport or doing DIY (Do It Yourself)",

    },

    {
        question: "When I go shopping for clothes, I tend to:",
        optionA: "imagine what they would look like on",
        optionB: "discuss them with the shop staff",
        optionC: "try them on and test them out",

    },

    {
        question: "When I am choosing a holiday I usually:",
        optionA: "imagine what it would be like to be there",
        optionB: "i will listen to recommendations from friends",
        optionC: "i will read lots of brochures",

    },

    {
        question: "If I was buying a new car, I would :",
        optionA: "i will read reviews in newspapers and magazines",
        optionB: "i will discuss what I need with my friends",
        optionC: "i will test-drive lots of different model cars",

    },

    {
        question: "When I am learning a new skill, I am most comfortable:",
        optionA: "i will watch what the teacher is doing",
        optionB: "talking through with the teacher exactly what I’m supposed to do",
        optionC: "giving it a  myself and work it out as I go",

    },

    {
        question: "If I am choosing food off a menu, I tend to",
        optionA: "I will imagine what the food will look like",
        optionB: "I will talk through the options in my head or with my partner",
        optionC: "I will imagine what the food will taste like",

    },

    {
        question: "During attending any function, when I listen to a band or Orchestra, I can’t help ",
        optionA: "watching the band members and other people in the audience",
        optionB: "listening to the lyrics and the beats",
        optionC: "moving in time with the music",

    },


    {
        question: "When I concentrate, I most often",
        optionA: "focus on the words or the pictures in front of me",
        optionB: "discuss the problem and the possible solutions in my head",
        optionC: "I will move around a lot, fiddle with pens and pencils and touch things",

    },

    {
        question: "I choose household furnishings because I like",
        optionA: "their colours and how they look",
        optionB: "how the sales-people give the descriptions to me",
        optionC: "their textures and what it feels like to touch them",

    },

    {
        question: "My first memory / impression is of",
        optionA: "by looking at something",
        optionB: "by being spoken to",
        optionC: "by doing something",

    },

    {
        question: "When I am anxious, I",
        optionA: "visualize the worst-case scenarios ",
        optionB: "talk over in my head what worries me most",
        optionC: "can’t sit still, fiddle and move around constantly",

    },

    {
        question: "I feel especially connected to other people because of",
        optionA: "how they look",
        optionB: "what they say to me",
        optionC: "how they make me feel",

    },

    {
        question: "When I have to revise for an exam, I generally",
        optionA: "imagine making the movement or creating the formula",
        optionB: "talk over my notes, alone or with other people",
        optionC: "write lots of revision notes and diagram",

    },

    {
        question: "If I am explaining to someone I often used to",
        optionA: "show them what I mean",
        optionB: "encourage them to try and talk them through my idea as they do it",
        optionC: "explain to them in different ways until they understand",

    },

    {
        question: "I really love",
        optionA: "watching films, photography, looking at art or people watching",
        optionB: "listening to music, the radio or talking to friends",
        optionC: "taking part in sporting activities, eating fine foods and wines or dancing",

    },

    {
        question: "Most of my free time i spent on:",
        optionA: "Watching television",
        optionB: "Talking to friends",
        optionC: "Doing physical activity or making things",
        correctOption: "optionC"
    },

    {
        question: "When I first contact a new person, I usually:",
        optionA: "Arrange a face to face meeting",
        optionB: "I will talk to them on the telephone",
        optionC: "Try to get together whilst doing something else, such as an activity or a meal",
        correctOption: "optionC"
    },

    {
        question: "How I notice people first time",
        optionA: "As per their look and dress",
        optionB: "Sound and speak",
        optionC: "Stand and Move",
        correctOption: "optionC"
    },

    {
        question: "If I am angry, I tend to",
        optionA: "Keep replaying in my mind what it is that has upset me",
        optionB: "Raise my voice and tell people how I feel",
        optionC: "Stamp about, slam doors and physically demonstrate my anger",
        correctOption: "optionC"
    },

    {
        question: "I find it easiest to remember",
        optionA: "Faces",
        optionB: "Names",
        optionC: "Things I have done",
        correctOption: "optionC"
    },

    {
        question: "I think that you can tell if someone is lying if",
        optionA: "They avoid looking at you",
        optionB: "Their voice changes",
        optionC: "They give me funny vibes",
        correctOption: "optionC"
    },

    {
        question: "When I meet an old friend",
        optionA: "I say “It’s great to see you!”",
        optionB: "I say “it’s great to hear from you!”",
        optionC: "I give them a hug or a handshake",
        correctOption: "optionC"
    },

    {
        question: "I remember things best by ",
        optionA: "Doing and practising the activity or imagining it being done",
        optionB: "Saying them aloud or repeating words and key points in my head",
        optionC: "Writing notes or keeping printed details",
        correctOption: "optionC"
    },

    {
        question: "If I have to complain about faulty goods, I am most comfortable",
        optionA: "Taking the item back to the store or posting it to head office",
        optionB: "Complaining over the phone",
        optionC: "Writing a letter",
        correctOption: "optionC"
    },

    {
        question: "When i discuss with my friends Usually, I tend to say",
        optionA: "I can see what you mean",
        optionB: "I can hear what you are saying",
        optionC: "I know how you feel",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions
let answer = []
function handleQuestions() {
    //function to shuffle and push 30 questions to shuffledQuestions array
//app would be dealing with 30questions per session
    while (shuffledQuestions.length <= 29) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }

}


let questionNumber = 1 //holds the current question number
// let playerScore = 0  //holds the player score
// let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    // document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    // document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
    // const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    // let correctOption = null
    //
    // options.forEach((option) => {
    //     if (option.value === currentQuestionAnswer) {
    //         //get's correct's radio input with correct answer
    //         correctOption = option.labels[0].id
    //     }
    // })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
    if(options[0].checked === true){
      answer.push(1);
    }else if(options[1].checked === true){
      answer.push(2);
    }else {
      answer.push(3);
    }
    // console.log(answer.length)
    indexNumber++
    setTimeout(() => {
        questionNumber++
    }, 1000)
    //checking if checked radio button is same as answer
    // options.forEach((option) => {
    //     if (option.checked === true && option.value === currentQuestionAnswer) {
    //         document.getElementById(correctOption).style.backgroundColor = "green"
    //         playerScore++ //adding to player's score
    //         indexNumber++ //adding 1 to index so has to display next question..
    //         //set to delay question number till when next question loads
    //         setTimeout(() => {
    //             questionNumber++
    //         }, 1000)
    //     }

        // else if (option.checked && option.value !== currentQuestionAnswer) {
        //     const wrongLabelId = option.labels[0].id
        //     document.getElementById(wrongLabelId).style.backgroundColor = "red"
        //     document.getElementById(correctOption).style.backgroundColor = "green"
        //     wrongAttempt++ //adds 1 to wrong attempts
        //     indexNumber++
        //     //set to delay question number till when next question loads
            // setTimeout(() => {
            //     questionNumber++
            // }, 1000)
        // }
    // })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 29) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    // let remark = null
    // let remarkColor = null
    //
    // // condition check for player remark and remark color
    // if (playerScore <= 3) {
    //     remark = "Bad Grades, Keep Practicing."
    //     remarkColor = "red"
    // }
    // else if (playerScore >= 4 && playerScore < 7) {
    //     remark = "Average Grades, You can do better."
    //     remarkColor = "orange"
    // }
    // else if (playerScore >= 7) {
    //     remark = "Excellent, Keep the good work going."
    //     remarkColor = "green"
    // }
    // const playerGrade = (playerScore / 10) * 100
    //
    // //data to display to score board
    // document.getElementById('remarks').innerHTML = remark
    // document.getElementById('remarks').style.color = remarkColor
    // document.getElementById('grade-percentage').innerHTML = playerGrade
    // document.getElementById('wrong-answers').innerHTML = wrongAttempt
    // document.getElementById('right-answers').innerHTML = playerScore

    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
var xhr = new XMLHttpRequest();
//passing the js array
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhr.responseText);
      document.getElementById("game-container").innerHTML = xhr.responseText;
    }
  };
function submit(){
   
    xhr.open("POST",'/predict', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
    value : answer
    }));
    // document.getElementById("game-container").innerHTML = xhr.response;

   
}
