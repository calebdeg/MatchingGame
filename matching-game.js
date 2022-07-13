let numberOfFaces = 5;
let numberOfRounds = 0;
const theLeftSide = document.getElementById('left-side');
const theRightSide = document.getElementById('right-side');

// Generates left and right side smiley faces
function generateFaces() {
    for(let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
            face.src = 'images/smile.png';
        
        randomTop = Math.floor(Math.random() * 400) + 1;
        randomLeft = Math.floor(Math.random() * 400) + 1;

        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';

        theLeftSide.appendChild(face);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);

        // Adds extra face to left side
        theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}

// Adds 5 more random faces to make game harder
function nextLevel(event) {
    event.stopPropagation();
    numberOfRounds += 1;
    
    while(theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    
    while(theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    
    numberOfFaces += 5;
    generateFaces();
}

// Alerts player how many rounds they made it and restarts game once 'ok' is clicked
function gameOver() {
    alert('Game over! You lose!\n\n' + 'You found ' + numberOfRounds + ' Extra face(s).');

    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);

    window.location.reload();
}