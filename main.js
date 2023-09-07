// Variables
let ballSpecificAnswer = document.getElementById("8ball-answer");
let ballAnswer = document.getElementById("8ball-answer");

// Event Listeners
document.getElementById("ball-click").addEventListener("click", btnClicked);

function btnClicked() {
    getResponse(document.getElementById("8ball-question").value.toLowerCase());
}

// Function
function getResponse(ballQuestion) {
    if (ballQuestion === "") {
        ballAnswer.innerHTML = "Please ask a question...";
    } else if (ballQuestion === "does a magic 8 ball actually work?") {
        ballAnswer.innerHTML = "How dare you doubt me!";
    } else if (ballQuestion === "is javascript awesome?") {
        ballAnswer.innerHTML = "Of Course!";
    } else {
        ballAnswer.innerHTML = randomResponse();
    }
}



// new code stuff for changing

function randomResponse() {
    let num = Math.floor(Math.random() * 5);
    if (num == 0) {
        return "Without a Doubt";
    } else if (num == 1) {
        return "As I see it, yes";
    } else if (num == 2) {
        return "Concentrate and ask again.";
    } else if (num == 3) {
        return "Don't count on it.";
    } else {
        return "Outlook not so good.";
    }
}

// Array of preset responses (not for the current assignment)

// // this was in place of the 'else'
// let random = Math.trunc(Math.random() * possible8BallAnswer.length);
// ballAnswer.innerHTML = possible8BallAnswer[random];

// // Preset Answer Array
// const possible8BallAnswer = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good", "Yes.", "Signs point to yes." ,"Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];