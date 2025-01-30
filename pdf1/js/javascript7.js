function checkEligibility(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age > 60) {return"You may join the seniors’ program."} 
    else if (age > 30) {return "You are not eligible. You may join other programs."} 
    else if (age >= 18) {return "You are eligible. Start your application."}
    else {return "You may join the kids' program."}
}

console.log(checkEligibility(1989))