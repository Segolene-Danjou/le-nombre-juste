var game = {
    min: 100,
    max: 500,
    randomNumber: 0,
    nbTry: 1,
    score: []
};

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {

    game.randomNumber = generateRandomInt(game.min, game.max);

    console.log(game.randomNumber);

    var proposition = prompt('Veuillez saisir un nombre compris entre ' + game.min + ' et ' + game.max + ' : ');

    if (proposition === null) {
        return;
    }

    proposition = parseInt(proposition, 10);

    game.nbTry = 1;

    while (proposition !== game.randomNumber) {
        if (proposition < game.randomNumber) {

            proposition = prompt("C'est plus, veuillez refaire une proposition : ");
        } else {
            proposition = prompt("C'est moins, veuillez refaire une proposition : ");
        }

        if (proposition === null) {
            return;
        }

        proposition = parseInt(proposition, 10);

        game.nbTry++;
    }

    game.score.push(game.nbTry);

    alert("Bravo, tu as trouvé le bon nombre : " + game.randomNumber + " en " + game.nbTry + " essai(s)");
}

function getScoreText() {
    var scoresText = '';
    for (var scoreIndex = 0; scoreIndex < game.score.length; scoreIndex++) {
        var round = scoreIndex + 1;
        var attempt = game.score[scoreIndex];
        var currentScoreText = 'Partie ' + round + ' : ' + attempt + ' essai(s)';
        scoresText += currentScoreText + "\n";
    }

    if (scoresText) {
        return scoresText;
    }
}

function showScoreHTML() {
 
    var ul = document.createElement('ul');

    for (var scoreIndex = 0; scoreIndex < game.score.length; scoreIndex++) {
        var round = scoreIndex + 1;
        var attempt = game.score[scoreIndex];
        var li = document.createElement('li');
        li.textContent = 'Partie ' + round + ' : ' + attempt + ' essai(s)';
        li.className = 'score';
        ul.appendChild(li);
    }
 
    var scoreContainer = document.querySelector('#scores');
    scoreContainer.appendChild(ul);

}

do {
    play();
} while (confirm("Désirez-vous rejouer ?"));


showScoreHTML();
