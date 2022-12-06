// Variables
let ballSpecificAnswer = document.getElementById("8ball-answer");
let ballAnswer = document.getElementById("8ball-answer");

// Event Listeners
document.getElementById("ball-click").addEventListener("click", answer);

// Preset Answer Array
const possible8BallAnswer = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good", "Yes.", "Signs point to yes." ,"Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];


// Function
function answer() {
    let ballQuestion = document.getElementById("8ball-question").value.toLowerCase();

    if (ballQuestion === "") {
        ballAnswer.innerHTML = "Ask a question!"
    } else if (ballQuestion === "how do you say quebec?") {
        ballAnswer.innerHTML = "Ke-bek, not Kwe-bek";
    } else if (ballQuestion === "what is gagaball?") {
        ballAnswer.innerHTML = "I don't know. I did not go to the rotunda to see the game.";
    } else if (ballQuestion === "how many if/else if statements did you do?") {
        ballAnswer.innerHTML = "3, the else statement at the end not included.";
    } else {
    let random = Math.trunc(Math.random() * possible8BallAnswer.length);
    ballAnswer.innerHTML = possible8BallAnswer[random];
    }
}