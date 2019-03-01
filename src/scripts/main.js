// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.
function addExcitement1(theWordArray, character, multiplier) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = " "

    for (let i = 0; i < theWordArray.length; i++) {

        // Add logic to addExcitement that places an astrix "*"         

            buildMeUp += theWordArray[i] + character.repeat(multiplier) + " ";

        } else {
            buildMeUp += theWordArray[i] + " ";
        }
        console.log(buildMeUp);
    }
}

function addExcitement2(theWordArray, character) {
    let buildMeUp = " "

    for (let i = 0; i < theWordArray.length; i++) {

        // Add logic to addExcitement that places a question mark "?" after every third word. If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single question mark (?) to the current word in the array.
        if ((i + 1) % 3 === 0 && i !== 0) {

            buildMeUp += theWordArray[i] + character + " ";

        } else {
            buildMeUp += theWordArray[i] + " ";
        }
        console.log(buildMeUp);
    }
}


function addExcitement3(theWordArray, character) {
    let buildMeUp = " "

    for (let i = 0; i < theWordArray.length; i++) {

        // Add logic to addExcitement that places an exclamation point "!" after every third word. If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.
        if ((i + 1) % 3 === 0 && i !== 0) {

            buildMeUp += theWordArray[i] + character + " ";

        } else {
            buildMeUp += theWordArray[i] + " ";
        }
        console.log(buildMeUp);
    }
}

addExcitement3(sentence, "!");
// Invoke the function and pass in the array
addExcitement2(sentence, "?");
// I want to use a 4 asterisks
addExcitement1(sentence, "*", 4)