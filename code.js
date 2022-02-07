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
    var die1 = 6 * Math.random();
    var roundDie1 = Math.ceil(die1);
    console.log("The random number is: " + die1);
    console.log("The rounded number is: " + roundDie1);
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + roundDie1;
    var die2 = 6 * Math.random();
    var roundDie2 = Math.ceil(die2);
    console.log("The random number is: " + die2);
    console.log("The rounded number is: " + roundDie2);
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + roundDie2;
    var sum = roundDie1 + roundDie2;
    console.log("The sum of the numbers is: " + sum);
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "You lose!";
    } else if(roundDie1 == roundDie2 && roundDie1 % 2 == 0){
        document.getElementById("crapsRes").innerHTML = "You win!";
    } else {
    document.getElementById("crapsRes").innerHTML = "Tie!";
}
}