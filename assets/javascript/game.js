$(document).ready(function () {
    //set variable to select a random number between 18-120 for the number to guess
    var increment = 18 + Math.round(Math.random() * 120);
    // show number in HTML
    $("#solution-number").html(increment);
    console.log(increment);

    //create variables for gems to select a random number for each gem
    var clearGem = 1 + Math.floor(Math.random() * 12);
    var redGem = 1 + Math.floor(Math.random() * 12);
    var greenGem = 1 + Math.floor(Math.random() * 12);
    var blueGem = 1 + Math.floor(Math.random() * 12);

    // declare your total, win and loss variable counters, and set to 0
    var yourTotal = 0;
    var winCount = 0;
    var lossCount = 0;
    //write to html
    $("#your-score").html(yourTotal);
    $("#wins-count").html(winCount);
    $("#losses-count").html(lossCount);

    // create var for reset
    var reset = function () {
        yourTotal = 0;
        increment = 18 + Math.floor(Math.random() * 120);
        clearGem = 1 + Math.floor(Math.random() * 12);
        redGem = 1 + Math.floor(Math.random() * 12);
        greenGem = 1 + Math.floor(Math.random() * 12);
        blueGem = 1 + Math.floor(Math.random() * 12);
        console.log(increment);
        $("#solution-number").html(increment);
        $("#your-score").html(yourTotal);
        $("#wins-count").html(winCount);
        $("#losses-count").html(lossCount);
    }

    var solutionCheck = function () {
        //win condition
        if (yourTotal == increment) {
            winCount++;
            alert("You win!");
            $("wins-count").html(winCount);
            reset();
        }
        // else if added for losses condition
        else if (yourTotal > increment) {
            lossCount++;
            alert("You lose!!");
            $("#losses-count").html(lossCount);
            reset();
        }
    };

    $("#crystal1").on("click", function () {
        yourTotal = yourTotal + clearGem;
        console.log(yourTotal);
        $("#your-score").html(yourTotal);
        solutionCheck();
    })

    $("#crystal2").on("click", function () {
        yourTotal = yourTotal + redGem;
        console.log(yourTotal);
        $("#your-score").html(yourTotal);
        solutionCheck();
    })

    $("#crystal3").on("click", function () {
        yourTotal = yourTotal + greenGem;
        console.log(yourTotal);
        $("#your-score").html(yourTotal);
        solutionCheck();
    })

    $("#crystal4").on("click", function () {
        yourTotal = yourTotal + blueGem;
        console.log(yourTotal);
        $("#your-score").html(yourTotal);
        solutionCheck();
    })

});
