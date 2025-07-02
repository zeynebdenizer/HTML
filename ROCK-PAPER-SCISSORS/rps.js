var choices = ["rock", "paper", "scissors"];
var you;
var yourScore = 0;
var computer;
var computerScore = 0;

window.onload = function() {
    for(let i=0; i<3;i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        document.getElementById("choices").appendChild(choice);
        choice.addEventListener("click", selectrps);
    }
}

function selectrps() { 
    you = this.id;
    document.getElementById("choice2").src = you + ".png";

    computer = choices[Math.floor(Math.random()*3)];
    document.getElementById("choice1").src = computer + ".png";

        if (you == computer) {
        yourScore += 1;
        computerScore += 1;
    }
    else {
        if (you == "rock") {
            if (computer == "scissors") {
                yourScore += 1;
            }
            else if (computer == "paper") {
                computerScore += 1;
            }
        }
        else if (you == "scissors") {
            if (computer == "paper") {
                yourScore += 1;
            }
            else if (computer == "rock") {
                computerScore += 1;
            }
        }
        else if (you == "paper") {
            if (computer == "rock") {
                yourScore += 1;
            }
            else if (computer == "scissors") {
                computerScore += 1;
            }
        }
    }

    document.getElementById("score2").innerHTML = yourScore;
    document.getElementById("score1").innerHTML = computerScore;
}