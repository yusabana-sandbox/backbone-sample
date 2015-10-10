var Backbone = require('backbone');
var $ = require('jquery');
// Backbone.$ = $;

var Book = require("./book");

console.log(new Book().get("author"));
console.log(new Book().get("title"));
