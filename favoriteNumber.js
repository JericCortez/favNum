function collectUserInfo() {
  
    let userInfo = {};

    userInfo.fullName = prompt("Jeric AYson:");

    userInfo.age = parseInt(prompt("20:"), 10);

    userInfo.favoriteNumber = parseInt(prompt("23:"), 10);
r
    userInfo.favoriteColor = prompt("Black:");

    if (userInfo.age < 5) {
        userInfo.ageGroup = "Toddler";
    } else if (userInfo.age >= 5 && userInfo.age <= 12) {
        userInfo.ageGroup = "Child";
    } else if (userInfo.age >= 13 && userInfo.age <= 19) {
        userInfo.ageGroup = "Teenager";
    } else if (userInfo.age >= 20 && userInfo.age <= 35) {
        userInfo.ageGroup = "Young Adult";
    } else if (userInfo.age >= 36 && userInfo.age <= 60) {
        userInfo.ageGroup = "Middle Age";
    } else {
        userInfo.ageGroup = "Senior";
    }

    let guess;
    while (true) {
        guess = parseInt(prompt("Guess your favorite number:"), 10);
        if (guess === userInfo.favoriteNumber) {
            console.log("Correct! You guessed the favorite number.");
            break;  // Exit the loop when the guess is correct
        } else if (guess < userInfo.favoriteNumber) {
            console.log("Too low! Try again.");
        } else {
            console.log("Too high! Try again.");
        }
    }

    console.log("User Information Collected:", userInfo);

    return userInfo;
}

collectUserInfo();
