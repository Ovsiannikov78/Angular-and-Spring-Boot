let sportsOne: string[] = ["Golf", "Fitness", "Tennis", "Swimming"];

for (let tempSport of sportsOne) {

    if (tempSport == "Fitness" || tempSport == "Swimming") {
        console.log(tempSport + "<<< My Favorite! >>>")
    } else {
        console.log(tempSport);
    }
}
