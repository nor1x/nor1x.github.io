var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

numberOfSquares = 6;
listOfColors = generateColors(numberOfSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

function changeColors(color){
	for(i = 0 ; i < square.length ; i++){
	square[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random()*listOfColors.length);
	return listOfColors[random];
}
function generateColors(num){
	var arr = [];
	for(var i = 0 ; i < num ; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}


easyButton.addEventListener("click", function(){
	numberOfSquares = 3
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	listOfColors = generateColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	header.style.backgroundColor = "#10091a"
	for(i = 0 ; i < square.length ; i++){
		if(listOfColors[i]){
			square[i].style.backgroundColor = listOfColors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}
})
hardButton.addEventListener("click", function(){
	numberOfSquares = 6;
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	listOfColors = generateColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	header.style.backgroundColor = "#10091a"
	for(i = 0 ; i < square.length ; i++){
		square[i].style.backgroundColor = listOfColors[i];
		square[i].style.display = "block";
		}
})

reset.addEventListener("click", function(){
	listOfColors = generateColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i = 0 ; i < square.length ; i++){
		square[i].style.backgroundColor = listOfColors[i];
	}
	this.textContent = "New Colors";
	header.style.backgroundColor = "#10091a";
	messageDisplay.textContent = "";
});

for(i = 0 ; i < square.length ; i++){
	// adding initial colors to the squares
	square[i].style.backgroundColor = listOfColors[i]

	// handling the click listener of the squares
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor == pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			header.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again ?"
		}

		else{
			this.style.backgroundColor = "#292229";
			messageDisplay.textContent = "Try again!";
		}
	})
}

