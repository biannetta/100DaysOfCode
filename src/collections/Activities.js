import { Activity } from '../models/index.js';
import { ActivityBackend } from "../_backend/_ActivityBackend.js";

/**
 * A Backbone Collection of Activities
 * 
 * Overrides the sync method leveraging a defined set of 
 * activity data from _helpers/_testData.js
 */
const ActivityCollection = Backbone.Collection.extend({
  model: Activity,
  url: "/activities",
  sync: ActivityBackend,
  comparator: 'type',
  filterByType: function (type) {
    return this.where({type: type})
  }
});

// Exporting out an instance of the ActivityCollection model
// defined with 'let' allows the creation of one collection of
// Activities througout the namespace of the application
export let Activities = new ActivityCollection();