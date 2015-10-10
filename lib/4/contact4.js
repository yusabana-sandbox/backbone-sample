var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: ''
  },
});

module.exports = Contact;
