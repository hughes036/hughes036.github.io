const gridColor = "black";
const bigAccentColor = "red";
const tripletColor = "blue";
const quintColor = "green";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = bigAccentColor;

const wholeWidth = 1000; 
const noteWidth = 8;
const height = 20;
const padding = 10;
const numBeats = 8;

// 4 over 5 polyrhythm
let numNotes = (4 / 5) * numBeats;
draw(0, numNotes);

// Quarters
ctx.fillStyle = gridColor;
draw(1, numBeats)
ctx.fillStyle = bigAccentColor;

// 4 over 3 polyrhythm
numNotes = (4 / 3) * numBeats;
draw(2, numNotes);

// 1/2 triplets (3 over 2 polyrhythm)
numNotes = (3 / 2) * numBeats;
ctx.fillStyle = tripletColor;
draw(3, numNotes)
ctx.fillStyle = bigAccentColor;

// half notes
numNotes = (4 / 2) * numBeats;
ctx.fillStyle = gridColor;
draw(4, numNotes)
ctx.fillStyle = bigAccentColor;

// 5 over 2 polyrhythm
numNotes = (5 / 2) * numBeats;
ctx.fillStyle = quintColor;
draw(5, numNotes);
ctx.fillStyle = bigAccentColor;

// quarter note triplets
numNotes = (6 / 2) * numBeats;
ctx.fillStyle = tripletColor;
draw(6, numNotes);
ctx.fillStyle = bigAccentColor;

// sixteenths
numNotes = (8 / 2) * numBeats;
ctx.fillStyle = gridColor;
draw(7, numNotes);

// quintuplets
numNotes = (10 / 2) * numBeats;
ctx.fillStyle = quintColor;
draw(8, numNotes);

// 8th note triplets
numNotes = (12 / 2) * numBeats;
ctx.fillStyle = tripletColor;
draw(9, numNotes);

ctx.fillStyle = gridColor;
// Quarters again
// draw(10, numBeats)

numNotes = (16 / 2) * numBeats;
// 32nd notes
draw(10, numNotes);


function draw(row, numNotes, tick = false){
    console.log(numNotes);
    for(i = 0; i <= numNotes; i++){
        const distanceBetweenNotes = wholeWidth / numNotes;
        const x = i * distanceBetweenNotes;
        const y = row * height;
        ctx.fillRect(padding + x, tick ? + (padding + y + height/2) : (padding + y), tick ? noteWidth/2 : noteWidth, tick ? height/2 : height);
        ctx.stroke();
    }
}