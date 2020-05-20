import { Activity } from "./models/index.js";
import { ActivitiesView } from "./views/index.js";
import { testActivities } from "./_helpers/_testData.js";

const appContent = document.getElementById("content");

// Step 1: Backbone Models
const activities = testActivities.reduce((accum, data) => {
  accum.push(new Activity({type: data.type, quantity: data.quantity}));
  return accum;
},[]);

// Step 2: Backbone Views
let activityList = document.createElement('div');
activities.forEach( activity => {
  let activityView = new ActivitiesView({ model: activity });
  activityList.appendChild(activityView.render().el);
});

appContent.appendChild(activityList);

