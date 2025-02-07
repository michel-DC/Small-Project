const BLACKLISTED_KEY_CODES = [38,40,37,39,18,20,17,16,9,27,144];
//List of commands
const COMMANDS = {
    "help":
        'La page que vous souhaitez visiter n`existe pas, ou elle a peut-être été supprimée, ou une mauvaise adresse a été saisie. Pour voir les commandes, entrez le mot <span class=\"red\"> commands</span>',
    "exit":
        "",
    "credits":
        "<span class='blue'>Cette page à été code par Michel DJOUMESSI en HTML, CSS et JavaScript, sur VS code. Et sinon vous ça va comment ? (<span class=\"red\"> bien</span> ou <span class=\"red\">pas bien</span>)</span>",
    "bien":
        "<span class='blue'>Super cool pour vous, merci de demander moi ça va super aussi.</span>",
    "pas bien":
        "<span class='blue'>Désolée, j'espère que les choses vont s'arranger, ne perdez surtout pas espoir.</span>",
    "report":
        "<span class='green'>Ce rapport de page a été envoyé avec succès au support.</span>",
    "commands":
        "Liste de commande: <span class=\"red\"> help</span> , <span class=\"red\"> report</span> ,<span class=\"red\"> exit</span>, <span class=\"red\"> credits</span>\n",
    "cls":
        ""
};


let userInput
let terminalOutput
let Terminal
let Keyboard
const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("code");
    Terminal = document.getElementById("Terminal");
    Keyboard = document.getElementById("Keyboard");
    Keyboard.focus();
    if (screen.width < 991){
        Keyboard.addEventListener("keyup", key);
    }
    else{
        document.addEventListener('keypress', key);
    }
    document.addEventListener("keydown", backSpace);
};

//When the user click the 'Enter' key
const execute = function executeCommand(input) {
    let output;

    if (input.length === 0) {
        return;
    }
    //If what the user entered is not in the command list
    if (!COMMANDS.hasOwnProperty(input)) {
        output = `<p>La commande qui à été écrite est invalide</p>`;
    }
    //If user enter the word cls
    else if (input === "cls") {
        terminalOutput.innerHTML = "";
        return;
    }
    //If the user enters one of the words 'exit' and 'close'
    else if (input === "close" || input === "exit") {
        document.location.href = "../../index.html" // The link that the user enters after sending the exit
        return;
    }
    //If the user enters the word report
    else if (input === "report") {
        terminalOutput.innerHTML = `${
            terminalOutput.innerHTML
        }<p>${COMMANDS[input]}</p>`;

        return;
    }
    //Otherwise, the text of the command will be displayed as output
    else {
        output = COMMANDS[input];
    }

    terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
    }<p class="out_code">${output}</p>`;
    Terminal.scrollTop = terminalOutput.scrollHeight;
};
let str = '';
//when user click any key
const key = function keyEvent(event) {
    let currentKey = event.key;
    Keyboard.focus();
    Keyboard.innerHTML = event.target.value;
    if (BLACKLISTED_KEY_CODES.includes(event.keyCode)) {
        return
    }
    if (!currentKey || currentKey === "Unidentified" || screen.width < 991) {
        currentKey = event.target.value;
    }
    if (event.key === "Enter") {
        execute(userInput.innerHTML);
        userInput.innerHTML = "";
        currentKey = "";
        event.target.value = "";
        str = '';
    }
    else{
        if(screen.width < 991){
            str = currentKey;
        }else{
            str += currentKey;
        }
        event.preventDefault();
        userInput.innerHTML = str;
    }
}
//when user click 'BackSpace' key
const backSpace = function backSpace(e){
    //if user click backspace
    if (e.keyCode === 8) {
        userInput.innerHTML = userInput.innerHTML.slice(
            0,
            userInput.innerHTML.length - 1
        );
        str = str.slice(
            0,
            str.length - 1
        );
    }
}
//When the user clicks on a control buttons
const BTNS = function MenuBTN(t) {
    switch (t) {
        case "max":
            if (document.getElementById("body").className !== "max") {
                document.getElementById("body").className = "max";
            } else {
                document.getElementById("body").className = "";
            }
            break;
        case "min":
            if (document.getElementById("body").className === "max") {
                document.getElementById("body").className = "max min";
            } else if (document.getElementById("body").className !== "max") {
                document.getElementById("body").className = "min";
            }
            break;
        case "re":
            if (document.getElementById("body").className === "max min") {
                document.getElementById("body").className = "max";
            }
            if (document.getElementById("body").className === "min") {
                document.getElementById("body").className = "";
            }
            break;
    }
};

document.addEventListener("DOMContentLoaded", app);