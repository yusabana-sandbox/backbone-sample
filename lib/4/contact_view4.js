var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var ContactView = Backbone.View.exten<%=d({
  initialize: function() {
    console.log("ContactViewが初期化されました");
  },

  render: function() {
    var templ = $('#contact-template').html();
    console.log(templ);
    console.log(this.model.toJSON());
    var html = _.template(templ, this.model.toJSON());

    console.log(html);

    // console.log(template);
    // console.log(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});

module.exports = ContactView;
