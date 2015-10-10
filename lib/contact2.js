var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: ''
  },

  initialize: function() {
    this.on('change', function() {
      console.log("属性が変更されました");
    });

    this.on('change:email', function() {
      console.log('emailが変更されました');
    });

    this.on('select', function(aa) {
      console.log(aa + ' : selectイベントが発生しました');
    });

    this.on('invalid', function(model, err){
      console.log(err);
    });
  },

  hoge: function() {
    this.selected = true;
    this.trigger('select', this.selected);
  },
  validate: function(attrs){
    if (!attrs.firstName || !attrs.lastName) {
      return 'first, last Name 必須です'
    }
  }
});

module.exports = Contact;
