// number to guess
var targetNumber = 50;
//win and loss variable counters
var winCount = 0;
var lossCount = 0;

// show solution number in html
$("#solution-number").text(targetNumber);

//create a counter for the crystal click values
var counter = 0;

//create array with numbers for the crystals to be randomly assigned
var numberOptions = [10, 11, 1, 5];

//set variable to randomly assign the numbers in the array to the 
//crystal images
var increment = numberOptions[Math.round(Math.random() * numberOptions.length)];

// create on click event for when the crystal images are clicked
$(".crystal-image").on("click", function () {

    //the counter will equal the random number each click generates
    counter += increment;
    console.log(counter);

    //working on getting result to show up in wins/losses/current score
    //$("your-score").append("Number Guessed: " + counter);

    //if added for wins condition
    if (counter === targetNumber) {
        winCount++;
        alert("You win!");
        console.log("You win! " + winCount);
        $("wins-count").prepend(winCount);

    }

    // else if added for losses condition
    else if (counter >= targetNumber) {
        lossCount++;
        //alerts loss
        alert("You lose!!");

        console.log("You lose!! " + lossCount);
        // working on getting result to display in html
    }


});

