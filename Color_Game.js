var numOfSquares = 6;
var colors = randomRGB(numOfSquares);
var selectedColor = pickedColor();
var blocks = document.querySelectorAll(".grid-item");
var rgbVal = document.querySelector(".rgbValue");
var alertPrompt = document.querySelector(".alert");
var heroHeader = document.querySelector(".header");
var gameReset = document.querySelector(".reset");
var easyMode = document.querySelector(".easy");
var hardMode = document.querySelector(".hard");
var hardBoxes = document.querySelectorAll(".hard-box");

rgbVal.innerHTML = selectedColor;
alertPrompt.style.visibility = "hidden";

for(var i = 0; i < blocks.length; i++){
    blocks[i].style.backgroundColor = colors[i];

    blocks[i].addEventListener("click", function(){
        alertPrompt.style.visibility = "visible";
        if(this.style.backgroundColor !== selectedColor){
            this.style.backgroundColor = "rgb(35, 35, 35)";
            alertPrompt.textContent = "Try Again";
        }
        else{
            alertPrompt.textContent = "Correct!";
            correctColor(selectedColor);
            gameReset.textContent = "Play Again?";
        }
    });
};

gameReset.addEventListener("click", function(){
    colors = randomRGB(numOfSquares);
    selectedColor = pickedColor();
    rgbVal.innerHTML = selectedColor;
    //alertPromt.textContent = "" would also work here [it's probably better practice]
    alertPrompt.style.visibility = "hidden";
    gameReset.textContent = "New Colors";
    heroHeader.style.backgroundColor = "rgb(60, 125, 200)";
    for(var i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = colors[i];
    }
});

easyMode.addEventListener("click", function(){
    easyMode.classList.add("active");
    hardMode.classList.remove("active");
    alertPrompt.style.visibility = "hidden";
    gameReset.textContent = "New Colors";
    numOfSquares = 3;
    resetPageAppearance();
    for(var i = 3; i < blocks.length; i++){
        blocks[i].classList.add("easy-mode")
    }; 
    for(var i = 0; i < colors.length; i++){
        blocks[i].style.backgroundColor = colors[i];
    }
});

hardMode.addEventListener("click", function(){
    hardMode.classList.add("active");
    easyMode.classList.remove("active");
    alertPrompt.style.visibility = "hidden";
    gameReset.textContent = "New Colors";
    numOfSquares = 6;
    resetPageAppearance();
    for(var i = 3; i < blocks.length; i++){
        blocks[i].classList.remove("easy-mode")
    };
    for(var i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = colors[i];
    }
});

function resetPageAppearance(){
    colors = randomRGB(numOfSquares);
    selectedColor = pickedColor();
    rgbVal.innerHTML = selectedColor;
    heroHeader.style.backgroundColor = "rgb(60, 125, 200)";
};

function correctColor(correctColor){
    for(var i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = correctColor;
        heroHeader.style.backgroundColor = correctColor;
    };
};

function pickedColor() {
    return colors[Math.floor(Math.random()*colors.length)];
};

function randomRGB(x){
    array = []
    
    for(var i = 0; i < x; i++){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var randColor = "rgb(" + r + ", " + g + ", " + b + ")";
        array.push(randColor);
    };

    return array
};