function penchoOdysseWeekOne(sideA, sideB, sideC) {

    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        console.log(`The Triangle of Truth with sides ${sideA}, ${sideB}, and ${sideC} has been validated. Pen4o, you may begin your journey!`)
    } else {
        console.log(`The Triangle of Truth with sides ${sideA}, ${sideB}, and ${sideC} is invalid. Pen4o remains stuck!`)
    }

}
penchoOdysseWeekOne(2, 2, 3)

// Write a function that takes three numbers representing the lengths of 
// the three sides of a triangle. Determine whether the triangle is valid
// based on the triangle inequality theorem.