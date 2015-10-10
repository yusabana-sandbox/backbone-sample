var Backbone = require("backbone");

var Book = Backbone.Model.extend({
  defaults: {
      title: "A book",
      author: 'Yuji'
    }
});

module.exports = Book;

