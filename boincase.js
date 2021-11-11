let pinCode = "1111";
let pinEntry = [];
let numberOfEntries = 0;
let attemptCount = 0;
let enteredNumber = 0;

const blueDots = () => {
    if (numberOfEntries >= 1) {
        document.getElementById("dotOne").style.backgroundColor = "rgb(78, 45, 197)";
    } else {
        document.getElementById("dotOne").style.backgroundColor = "white";
    }
    if (numberOfEntries >= 2) {
        document.getElementById("dotTwo").style.backgroundColor = "rgb(78, 45, 197)";
    } else {
        document.getElementById("dotTwo").style.backgroundColor = "white";
    }
    if (numberOfEntries >= 3) {
        document.getElementById("dotThree").style.backgroundColor = "rgb(78, 45, 197)";
    } else {
        document.getElementById("dotThree").style.backgroundColor = "white";
    }
    if (numberOfEntries >= 4) {
        document.getElementById("dotFour").style.backgroundColor = "rgb(78, 45, 197)";
    } else {
        document.getElementById("dotFour").style.backgroundColor = "white";

    }
}

const handleClick = (num) => {
    if (numberOfEntries < 4) {
        numberOfEntries += 1;
        blueDots();
        pinEntry.push(num);
        var attempt = pinEntry.join('');
        document.getElementById("pinTest").innerHTML = attempt + "---" + numberOfEntries;
    } 
    if (numberOfEntries === 4) {        
        attemptCount += 1;
        blueDots();
        if (attempt === pinCode) {
            document.getElementById("pinTest").innerHTML = "Success!";
            location.href = "success.html";
        } else if (attemptCount < 4) {
            document.getElementById("pinTest").innerHTML = "Wrong Again! You have " + (4 - attemptCount) + " more tries";
            pinEntry = [];
            numberOfEntries = 0;
            } else if (attemptCount >= 4) {
                document.getElementById("pinTest").innerHTML = "Get the hell out of here! You messed it all up!";
                setTimeout((location.href = "explode.html"), 2000);
            }   
    }
}

const backspace = () => {
    if (numberOfEntries >= 1) {
        numberOfEntries -= 1;
    }
    blueDots();
    pinEntry.splice(-1);
    var attempt = pinEntry.join('');
    document.getElementById("pinTest").innerHTML = attempt + "---" + numberOfEntries;
}

const allClear = () => {
    backspace();
    backspace();
    backspace();
    backspace();
}

    
    // numberOfEntries = 0;
    // pinEntry = [];
    // var attempt = pinEntry.join('');
    // document.getElementById("pinTest").innerHTML = attempt + "---" + numberOfEntries;
    // blueDots();


