import { ActivityBackend } from "../_backend/_ActivityBackend.js";

const activityTypes = {
  SITUPS: "Situps",
  PUSHUPS: "Pushups",
  SQUATS: "Squats",
  PLANKS: "Planks"
}

/**
 * A Backbone Model of an Activity
 * 
 * Utilized by the Activities Collection
 */
export const Activity = Backbone.Model.extend({
  defaults: {
    type: '',
    quantity: 0,
    datetime: Date.now(),
  },
  sync: ActivityBackend,
  urlRoot: '/activity',
});