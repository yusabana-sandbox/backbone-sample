var Contact = require('./contact4');
var ContactView = require('./contact_view4');
var $ = require('jquery');
var _ = require('underscore');

var contact = new Contact({
  firstName: 'Alice',
  lastName: 'Henson',
  email: 'alice@example.com'
});

var contactView = new ContactView({
  model: contact
});


$(function() {
  console.log("aaaaaaaaaa");
  contactView.render().$el.appendTo($(document.body));
});
