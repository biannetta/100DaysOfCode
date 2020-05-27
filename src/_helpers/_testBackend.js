import { testActivities } from "./_testData.js";
import { Activity } from "../models/index.js";

const testBackend = function (method, model, options) {
  if (method == "read") {
    testActivities.map((data) => {
      model.add(new Activity(data));
    });
  }
}

Backbone.sync = testBackend;