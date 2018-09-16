// create variables
var randomNumber = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystals = {};

// create global functions

$(document).ready(function () {
    var startGame = function () {
        randomNumber = Math.floor((Math.random() * 50) + 50);
        console.log(randomNumber);
        $("#random-number").html(randomNumber);
        totalScore = 0;
        crystals = {
            one: Math.random() * 10 + 3,
            two: Math.random() * 10 + 3,
            three: Math.random() * 10 + 3,
            four: Math.random() * 10 + 3,
        };
        console.log(crystals);
    };

    startGame();


    $("#crystal1").on("click", function () {
        totalScore += parseInt(crystals.one);
        $("#total-score").html(totalScore);
    });

    $("#crystal2").on("click", function () {
        totalScore += parseInt(crystals.two);
        $("#total-score").html(totalScore);
    });

    $("#crystal3").on("click", function () {
        totalScore += parseInt(crystals.three);
        $("#total-score").html(totalScore);
    });

    $("#crystal4").on("click", function () {
        totalScore += parseInt(crystals.four);
        $("#total-score").html(totalScore);
    });

    // check if total score == random number
    if (totalScore == randomNumber) {
        alert("You Win!");
        wins++;
        $("#win-count").html(wins);
        startGame();
    } else if (totalScore >= randomNumber) {
        alert("You Lose!");
        losses++;
        $("#loss-count").html(losses);
        startGame();
    };

});