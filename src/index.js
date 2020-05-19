import { Activity } from "./models/index.js";
import { testActivities } from "./_helpers/_testData.js";

const activities = testActivities.reduce((accum, data) => {
  accum.push(new Activity({type: data.type, quantity: data.quantity}));
  return accum;
},[]);

const appContent = document.getElementById("content");
const activityList = document.createElement('ul');
activityList.setAttribute("id", "activity-list");

activities.forEach( activity => {
  let item = document.createElement('li');
  item.innerHTML = activity.get('type');
  activityList.appendChild(item);
});

appContent.appendChild(activityList);