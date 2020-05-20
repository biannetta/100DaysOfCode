import { PrettyDateView } from './PrettyDate.js';

const html = String.raw;

export const ActivitiesView = Backbone.View.extend ({
  tagName: 'div',
  render: function () {
    const formattedDate = new PrettyDateView({ model: this.model});

    this.el.innerHTML = html`
      <h3 class="activity__header">${formattedDate.render()}</h3>
      <div class="activity__body">
        <span>${this.model.get('type')}</span>
        <span class="activity__body--emphasis">${this.model.get('quantity')}</span>
      </div>
    `;
    return this;
  }
});