var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var ContactView = Backbone.View.extend({
  initialize: function() {
    console.log("ContactViewが初期化されました");
  },

  render: function() {
    var templ = $('#contact-template').html();
    var html = _.template(templ);

    // console.log(template);
    // console.log(this.model.toJSON());
    this.$el.html(html(this.model.toJSON()));

    return this;
  }
});

module.exports = ContactView;
