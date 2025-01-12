function penchoOdysseWeekTwo(penchoChoice) {

    let doorNumber = Math.floor(Math.random() * 3) + 1;

    if (penchoChoice === doorNumber) {
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${doorNumber}!`)
    } else if (penchoChoice !== doorNumber && penchoChoice < 4) {
        console.log(`A bucket of cold water splashes on you! Unlucky Pen4o!`)
    } else {
        console.log(`Invalid choice. Please select Door 1, 2, or 3.`)
    }

}
penchoOdysseWeekTwo(10)

// Write a function that takes the user's choice (the number of the selected door).
// Randomly generate the number of the door behind which the golden treasure is hidden.
//  Then, compare the user's choice with the door number containing the gold and inform Pencho about his fate.