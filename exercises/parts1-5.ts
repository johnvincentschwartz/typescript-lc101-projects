// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = 'Determination';
// let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
// let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;

// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     let milesToLocation: number = kilometersAway * 0.621;
//     let hoursToLocation: number = milesToLocation / 17500;
//     let daysToLocation: number = hoursToLocation / 24;
//     return daysToLocation;
// }

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName}'s Days to Mars: ${getDaysToLocation(kilometersToMars)}`);
// console.log(`${spacecraftName}'s Days to the Moon: ${getDaysToLocation(kilometersToTheMoon)}`);

// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKiloneter: number = 0.621;
    name: string;
    speedMph: number;
    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway: number): number {
        let milesToLocation: number = kilometersAway * this.milesPerKiloneter;
        let hoursToLocation: number = milesToLocation / this.speedMph;
        let daysToLocation: number = hoursToLocation / 24;
        return daysToLocation;
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`The ${spaceShuttle.name}'s Days to Mars: ${spaceShuttle.getDaysToLocation(kilometersToMars)}`);
// console.log(`The ${spaceShuttle.name}'s Days to the Moon: ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)}`);

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));