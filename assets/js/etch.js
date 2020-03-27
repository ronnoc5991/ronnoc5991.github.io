const container = document.getElementById("container");
container.style.cssText = 'display: flex; flex-wrap: wrap; align-items: center; background: yellow; width: 100%; height: 100%; margin: 0 auto; grid-row-start: 2; grid-row-end: 3; grid-column-start: 2; grid-column-end: 3; align-self: center; border: 4px solid black; border-radius: 1%; box-shadow: 0 0 2pt 1pt;';
document.getElementById("button").addEventListener('click' , newGrid);


let size = 256
let denominator = ((1/16)*100);
let i = 0;
while (i < size) { //creates initial grid
    var square = document.createElement('div'); //creates a div
    square.id = "square" + i; // assigns the id "square(number)" to the div
    square.className = "squares"; //assigns the class name "squares" to the div... gives it a height/size/color
    square.style.cssText = "height: " + denominator + "%; width: " + denominator + "%; background: white;"// outline: solid 0.5px black;"
    square.addEventListener('mouseenter',function(){addClassName(this.id);}); //adds event listener on mouse enter and gives the function the id of the hovered on square
    container.appendChild(square); //appends the square to the container
    i++
}

function addClassName(x) { //adds hover classname to the squares
    let id = document.getElementById(x); // stores the id of the hovered square in the variable "id"
    if (id.className = "squares"){ // if the div does not already have the hover class added
        id.className += ' hover'; //adds the hover class
        id.style.cssText += "background: black;"
    }
    console.log(id);
}

function newGrid() { //removes all squares from the grid...asks for new dimensions and creates new grid
    while (container.hasChildNodes()){ //removes all squares from the grid
        container.removeChild(container.firstChild);
    }

    let width = prompt("How many squares do you want per side? \n(example: \'50\' produces a 50x50 grid of squares)");//gets the new desired size from the user
    console.log(width); //checks to make sure that the value was correctly stored
    let i = 0;
    let size = (width * width);
    let denominator = ((1/width) * 100);
    while (i < size) {
        var square = document.createElement('div'); //creates a div
        square.id = "square" + i; // assigns the id "square(number)" to the div
        square.className = "squares"; //assigns the class name "squares" to the div... gives it a height/size/color
        square.style.cssText = "height: " + denominator + "%; width: " + denominator + "%; background: white;"// outline: solid 0.5px black;"
        square.addEventListener('mouseenter',function(){addClassName(this.id);}); //adds event listener on mouse enter and gives the function the id of the hovered on square
        container.appendChild(square); //appends the square to the container
        i++
    }
}