import { CardComponent } from '../components/Card.js';

export const ActivityCardView = Backbone.View.extend ({
  tagName: 'div',
  className: 'space-between',
  render: function () {
    const { type, quantity } = this.model.attributes;

    let activityCard = new CardComponent({
      text: quantity,
      subtext: type
    });

    this.$el.html(activityCard.render().el);

    return this;
  }
});