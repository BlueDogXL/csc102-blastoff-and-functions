// we neet to count down from 50 in 5 second increments and show blast off at the end
function blastOffTimer() {
    console.log("blastOffTimer started");
    var currTime = 50;
    var increment = 5;
    var timeMult = 5000;
    document.getElementById("blastOffText").innerHTML = currTime
    console.log(currTime);
    currTime = currTime - increment;
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 2 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 3 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 4 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 5 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 6 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 7 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 8 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 9 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = "Blast off!";
        currTime = currTime - increment;
    }, 10 * timeMult)
}
function playCraps() {
    console.log("Playing Craps");
    // writes to the console that the function has started
    var die1 = 6 * Math.random();
    // gets a random number between 0 and 5 but never exactly 0 or 5 i think. has a lot of garbage decimal attached
    var roundDie1 = Math.ceil(die1);
    // makes our numbers pretty and between 1 and 6
    console.log("The random number is: " + die1);
    // writes the first number to the console
    console.log("The rounded number is: " + roundDie1);
    // writes the rounded number to the console 
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + roundDie1;
    // puts the first die into the die1Res spot on the page
    var die2 = 6 * Math.random();
    // second verse, same as the first
    var roundDie2 = Math.ceil(die2);
    console.log("The random number is: " + die2);
    console.log("The rounded number is: " + roundDie2);
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + roundDie2;
    // puts all the things where they go
    var sum = roundDie1 + roundDie2;
    // makes the sum variable the sum of the rounded dice
    console.log("The sum of the numbers is: " + sum);
    // puts the sum into the console
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;
    // puts the sum into the sum spot on the page
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "You lose!";
        //checks to see if you suck at craps
    } else if(roundDie1 == roundDie2 && roundDie1 % 2 == 0){
        document.getElementById("crapsRes").innerHTML = "You win!";
        //checks to see if you're good at craps
    } else {
    document.getElementById("crapsRes").innerHTML = "Tie!";
        // if you neither suck nor are good at craps, says it's a tie
}
}
