let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkNumber() {
    let userInput = parseInt(document.getElementById("userInput").value);

    if (userInput < 1 || userInput > 100) {
        document.getElementById("result").className = "result-fail";
        document.getElementById("result").innerText = "Número fora do escopo (1 a 100). Tente novamente!";
    } else if (userInput === randomNumber) {
        attempts++;
        document.getElementById("result").className = "result-success";
        document.getElementById("result").innerText = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
    } else {
        attempts++;
        document.getElementById("result").className = "result-error";
        document.getElementById("result").innerText = `Tente novamente. O número é ${userInput > randomNumber ? 'menor' : 'maior'} que ${userInput}.`;
    }
}
