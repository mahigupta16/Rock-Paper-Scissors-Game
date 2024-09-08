let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('user-score').textContent = '0';
    document.getElementById('comp-score').textContent = '0';
    document.getElementById('msg').textContent = 'Play your move!';
});

const getcomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const showwinner = (userwin, userChoice, compChoice) => {
    // Added userChoice and compChoice as parameters
    if (userwin) {
        userscore++;
        console.log("win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        userscorepara.innerText = userscore;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        console.log("lose");
        msg.innerText = `You lost. Computer's ${compChoice} beats your ${userChoice}`;
        compscorepara.innerText = compscore;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    const compchoice = getcomputerchoice();
    console.log("comp choice=", compchoice);

    if (userchoice === compchoice) {
        console.log("Draw!");
        msg.innerText = "Game was Draw! Play again!";
        msg.style.backgroundColor = "#081b31";
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice); // Pass userchoice and compchoice here
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
