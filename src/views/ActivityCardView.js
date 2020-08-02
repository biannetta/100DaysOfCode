import { CardView } from '../components/Card.js';

export const ActivityCardView = Backbone.View.extend ({
  tagName: 'div',
  render: function () {
    const { type, quantity } = this.model.attributes;

    let activityCard = new CardView({
      text: quantity,
      subtext: type
    });

    this.$el.html(activityCard.render().el);

    return this;
  }
});