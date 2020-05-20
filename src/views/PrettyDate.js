let formatOptions = {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
}

const html = String.raw;
const dtFormatter = new Intl.DateTimeFormat('en', formatOptions)
    
export const PrettyDateView = Backbone.View.extend({
  render: function () {
    const [{ value: month },,{ value: day },,{ value: year }] = dtFormatter.formatToParts(this.model.get('datetime'));
    return html`
      ${day}-${month}-${year}
    `;
  }
})