import { Activity } from "./models/index.js";
import { ActivityItemView } from "./views/index.js";
import { testActivities } from "./_helpers/_testData.js";

const appContent = document.getElementById("activity-list");

// Step 1: Backbone Models
const activities = testActivities.reduce((accum, data) => {
  accum.push(new Activity({type: data.type, quantity: data.quantity}));
  return accum;
},[]);

// Step 2: Backbone Views
activities.forEach( activity => {
  let activityView = new ActivityItemView({ model: activity, el: appContent });
  activityView.render();
});
