import { Activity } from "./models/index.js";

let activities = [];
activities[0] = new Activity({type: 'Plank', quantity: 2});
activities[1] = new Activity({type: 'Situps', quantity: 25});

console.log(activities);