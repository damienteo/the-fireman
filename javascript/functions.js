// function positionNew() {
//     var updateRow = playerPosition.row;
//     var updateCell = playerPosition.cell;
// }

function positionUpdate() {
    var updateRow = playerPosition.row;
    var updateCell = playerPosition.cell;
    var newPosition;
    var getCell;
    if ((updateRow<10)&&(updateCell<10)) {
        newPosition = "row0"+updateRow+"cell0"+updateCell;
        getCell= document.getElementById(newPosition);
        getCell.classList.add("player");
        }   else if (updateRow<10) {
            newPosition = "row0"+updateRow+"cell"+updateCell;
            getCell= document.getElementById(newPosition);
            getCell.classList.add("player");
        }   else if (updateCell<10)  {
            newPosition = "row"+updateRow+"cell0"+updateCell;
            getCell= document.getElementById(newPosition);
            getCell.classList.add("player");
        }   else    {
            newPosition = "row"+updateRow+"cell"+updateCell;
            getCell= document.getElementById(newPosition);
            getCell.classList.add("player");
        }
    return newPosition;
}

function positionCurrent() {
    var updateRow = playerPosition.row;
    var updateCell = playerPosition.cell;
    var currentPosition;
    if ((updateRow<10)&&(updateCell<10)) {
        currentPosition = "row0"+updateRow+"cell0"+updateCell;
        }   else if (updateRow<10) {
            currentPosition = "row0"+updateRow+"cell"+updateCell;
        }   else if (updateCell<10)  {
            currentPosition = "row"+updateRow+"cell0"+updateCell;
        }   else    {
            currentPosition = "row"+updateRow+"cell"+updateCell;
        }
    return currentPosition;
}

function drawPlayer() {
    positionUpdate();
    var newPosition = positionUpdate();
    var getCell= document.getElementById(newPosition);
    if (getCell.className == "cell fire player") {
        startType();
        typingOn = true;
        getCell.classList.remove("fire");
    }
}

function clearPlayer() {
    var currentPosition = positionCurrent();
    var allPlayers = document.querySelectorAll(".player");
    for (var i=0; i<allPlayers.length; i++){
        if (allPlayers[i].id != currentPosition) {
            allPlayers[i].classList.remove("player");
        }
    }
}

function firePosition() {
    var fireRow = Math.floor(Math.random() * playArea);
    var fireCell = Math.floor(Math.random() * playArea);
    var firePosition;
    if ((fireRow<10)&&(fireCell<10)) {
        firePosition = "row0"+fireRow+"cell0"+fireCell;
        }   else if (fireRow<10) {
            firePosition = "row0"+fireRow+"cell"+fireCell;
        }   else if (fireCell<10)  {
            firePosition = "row"+fireRow+"cell0"+fireCell;
        }   else    {
            firePosition = "row"+fireRow+"cell"+fireCell;
        }
    return firePosition;
}

// function getFire(newFire) {
//     document.getElementById(newFire);
// }

function startFire() {
    var newFire = firePosition();
    var getFire = document.getElementById(newFire);
    getFire.classList.add("fire");
}

function spreadFire() {
    // var allFires = document.querySelectorAll(".fire");
    // for (var i=0; i<allFires.length; i++){
    // var currentRow = document.querySelectorAll(".row");
    var currentCell = document.querySelectorAll(".cell");
    for (var i = 0; i < currentCell.length; i++) {
        if (currentCell[i].classList.contains("fire")) {
            var string = currentCell[i].id;
            var rowIndex = parseInt(string[3]+string[4]);
            var cellIndex = parseInt(string[9]+string[10]);
            var originCell = string[9]+string[10];
            var originRow = string[3]+string[4];
            var spreadLeft = cellIndex-=1;
            var spreadRight = cellIndex+=2;
            var spreadUp = rowIndex-=1;
            var spreadDown = rowIndex+=2;
            if(spreadLeft<10){
                spreadLeft="0"+spreadLeft;
            }
            if(spreadRight<10){
                spreadRight="0"+spreadRight;
            }
            if(spreadUp<10){
                spreadUp="0"+spreadUp;
            }
            if(spreadDown<10){
                spreadDown="0"+spreadDown;
            }
            var leftFire = "row"+originRow+"cell"+spreadLeft;
            var rightFire = "row"+originRow+"cell"+spreadRight;
            var upFire = "row"+spreadUp+"cell"+originCell;
            var downFire = "row"+spreadDown+"cell"+originCell;

            var startLeft = document.getElementById(leftFire);
            startLeft.classList.add("fire");

            var startRight = document.getElementById(rightFire);
            startRight.classList.add("fire");

            var startUp = document.getElementById(upFire);
            startUp.classList.add("fire");

            var startDown = document.getElementById(downFire);
            startDown.classList.add("fire");

            console.log("The original position is: row " + originRow + " cell " + originCell + "It will spread left to " + leftFire + ". It will spread right to " + rightFire + ". it will spread up to " + upFire+ ". It will spread down to "+ downFire + ".");
        }
    }

        //     var currentFire = i;
        //     var fireLeft = (currentFire-=1);
        //     // var fireRight = (currentFire+=2);
        //     console.log(i)
        //     console.log("fireLeft" + fireLeft)
        //     // console.log("fireRight" + fireRight)
        //     currentCell[fireLeft].classList.add("fire");
        //     // currentCell[fireRight].classList.add("fire");
        // }
}


function playerMove(e) {
    // keyCode for up arrow key is 38
    if (e.keyCode==38) {
        playerPosition.row -= 1;
        if ((playerPosition.row < 0) || (typingOn == true)) {
            playerPosition.row += 1;
        }
    }
// keyCode for right arrow key is 39
    if (e.keyCode==39) {
        playerPosition.cell += 1;
        if ((playerPosition.cell >= playArea)  || (typingOn == true)) {
            playerPosition.cell -= 1;
        }
    }
// keyCode for down arrow key is 40
    if (e.keyCode==40) {
        playerPosition.row += 1;
        if ((playerPosition.row >= playArea) || (typingOn == true)) {
            playerPosition.row -= 1;
        }
    }
// keyCode for left arrow key is 37
    if (e.keyCode==37) {
        playerPosition.cell -= 1;
        if ((playerPosition.cell < 0) || (typingOn == true)) {
            playerPosition.cell += 1;
        }
    }
}

function clearGame() {
    var clearRow =document.querySelectorAll(".row");
    for (var i = 0; i < clearRow.length; i++) {
        clearRow[i].parentNode.removeChild(clearRow[i]);
    }
}

var hoverStart =  function() {
    document.getElementById("startButton").addEventListener("mouseover", function(){
    document.getElementById("startButton").style.backgroundColor = "white";
    document.getElementById("startButton").style.color = "black";
    })
    document.getElementById("startButton").addEventListener("mouseout", function(){
    document.getElementById("startButton").style.backgroundColor = "black";
      document.getElementById("startButton").style.color = "white";
    })
}

var hoverInstruction =  function() {
    document.getElementById("instructionButton").addEventListener("mouseover", function(){
    document.getElementById("instructionButton").style.backgroundColor = "white";
    document.getElementById("instructionButton").style.color = "black";
    })
    document.getElementById("instructionButton").addEventListener("mouseout", function(){
    document.getElementById("instructionButton").style.backgroundColor = "black";
      document.getElementById("instructionButton").style.color = "white";
    })
}
