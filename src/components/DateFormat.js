const html = String.raw;

let formatOptions = {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
}

const dtFormatter = new Intl.DateTimeFormat('en', formatOptions)

export const DateView = Backbone.View.extend({

  render: function () {
    return html`
      ${dtFormatter.format(this.model.get('datetime'))}
    `;
  }
})