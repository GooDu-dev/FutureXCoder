var score=0, currentQuestion=1;

function startGame(){
    let question = document.getElementById("question")
    let choices = document.querySelectorAll(".choice")
    let button = document.getElementById("start-button")

    button.style.display = "none"
    question.style.display = "initial"
    choices.forEach(choice => {
        choice.style.display = "initial"
    })

    chooseQ()
}

function chooseQ(){
    let c1, c2, c3, c4, correct, question
    let quest = document.getElementById("question")
    let choices = document.querySelectorAll(".choice")
    let currQuestion = document.getElementById("current-question")
    switch(currentQuestion){
    case 1:
        question = "HTML is stand for"
        c1 = "Hyper Text Markup Language"
        c2 = "hyperbora Tuna Makuro Leo"
        c3 = "Hyper Text makeup Language"
        c4 = "Hero Taro Milo Lol"
        correct = "c3"
        break;
    case 2:
        question = "What is the result of console.log(`Hello World`)"
        c1 = "Hello Kitty"
        c2 = "hello World"
        c3 = "Hello world"
        c4 = "Hello World"
        correct = "c4"
        break;
    case 3:
        question = "Which choice is loop"
        c1 = "for, while"
        c2 = "if-else"
        c3 = "<h1></h1>"
        c4 = "position: realtive;"
        correct = "c1"
        break;
    case 4:
        question = "Which one is use for develope front-end"
        c1 = "HTML CSS Javascript"
        c2 = "Java"
        c3 = "Python (not pyscript)"
        c4 = "Flutter"
        correct = "c1"
        break;
    case 5:
        question = "Which is programming langauge"
        c1 = "English"
        c2 = "Javascript"
        c3 = "HTML"
        c4 = "CSS"
        correct = "c2"
        break;
    }
    quest.innerText = question
    choices.forEach(choice => {
        let ch = choice.getAttribute("unique")
        switch(ch){
            case "c1":
                choice.innerText = c1                
                break;
            case "c2":
                choice.innerText = c2
                break;
            case "c3":
                choice.innerText = c3
                break;
            case "c4":
                choice.innerText = c4
                break;
        }
        if(correct == ch){
            choice.setAttribute("correct", true)
        }
        else{
            choice.setAttribute("correct", false)
        }
    })
    currQuestion.innerText = currentQuestion
}

function checkAnswer(){
    let choices = document.querySelectorAll(".choice")
    let currQuestion = document.getElementById("current-question")
    let scoreText = document.getElementById("score")
    choices.forEach(choice => {
        choice.addEventListener("click", function(){
            let correct = choice.getAttribute("correct")
            if(correct){
                score += 1;
                scoreText.innerText = score
            }
            currentQuestion += 1
            
            if(currentQuestion >= 6){
                currQuestion.innerText = 5
            }
            if(currentQuestion >= 6){
                endGame()
            }
            else[
                chooseQ()
            ]
        })
    })
}

function endGame(){
    let button = document.getElementById("start-button")
    let question = document.getElementById("question")
    let choices = document.querySelectorAll(".choice")

    button.style.display = "initial"
    question.style.display = "none"
    choices.forEach(choice => {
        choice.style.display = "none"
    })

    score = 0;
    currentQuestion = 1;
}