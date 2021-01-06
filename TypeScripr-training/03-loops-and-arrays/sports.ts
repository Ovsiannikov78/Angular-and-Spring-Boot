let sportsOne = ["Golf", "Fitness", "Tennis", "Swimming"];

/*for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}*/

// Let's use the simplified for loop

for (let tempSport of sportsOne) {

    if (tempSport == "Fitness" || tempSport == "Swimming") {
        console.log(tempSport + "<<< My Favorite! >>>")
    } else {
        console.log(tempSport);
    }
}
