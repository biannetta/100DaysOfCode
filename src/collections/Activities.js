import { Activity } from '../models/index.js';
import { ActivityBackend } from "../_backend/_ActivityBackend.js";

/**
 * A Backbone Collection of Activities
 * 
 * Overrides the sync method leveraging a defined set of 
 * activity data from _helpers/_testData.js
 */
export const Activities = Backbone.Collection.extend({
  model: Activity,
  url: "/activities",
  preinitialize: function () {
    this.on("add", (event) => console.log(event));
  },
  sync: ActivityBackend
})