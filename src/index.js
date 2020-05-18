import { Activity } from "./models/index.js";
import { testActivities } from "./_helpers/_testData.js";

var activities = testActivities.reduce(function (accum, data) {
  accum.push(new Activity({type: data.type, quantity: data.quantity}));
  return accum;
},[]);

console.log(activities);