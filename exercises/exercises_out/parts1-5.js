"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
const SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
const SpacecraftName = 'Determination';
const speedMph = 17500;
const kilometersToMars = 225000000;
const kilometersToTheMoon = 384400;
const milesPerKilometer = .621;
const milesToMars = kilometersToMars * milesPerKilometer;
const hoursToMars = milesToMars / speedMph;
const daysToMars = hoursToMars / 24;
// Part 2: Print Days to Mars
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    return ((kilometersAway * milesPerKilometer) / speedMph) / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
class Spacecraft {
    constructor(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        return ((kilometersAway * this.milesPerKilometer) / this.speedMph) / 24;
    }
    printDaysToLocation(location) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Paste in the code from step 6 here:
//# sourceMappingURL=parts1-5.js.map