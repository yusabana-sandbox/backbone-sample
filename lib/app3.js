var Backbone = require('backbone');
var Contact  = require('./contact3');

var alice = new Contact({
  firstName: 'Alice',
  lastName: 'Henderson',
  email: 'alice@example.com'
}, { validate: true });

var bob = new Contact({
  firstName: 'Bob',
  lastName: 'Henderson',
  email: 'bob@example.com'
}, { validate: true });

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  initialize: function() {
    console.log('ContactCollectionが初期化されました');
    this.on('add', function(model){
      console.log('contactモデルが追加されました : ' + model.get("firstName"));
    });
  },

  url: '/json/contacts.json',
});

var collection = new ContactCollection([alice]);
collection.add(bob); // addイベントはこの時だけ発生

// console.log(collection.length);
// console.log(JSON.stringify(collection, null, 4));

// collection.remove(bob);
// console.log(JSON.stringify(collection, null, 4));


// collection.each(function(contact){
//   console.log("ループ: " + contact.get("firstName"));
// });

// var filtered = collection.filter(function(contact) {
//   return contact.get("firstName") === 'Alice';
// });
// console.log(JSON.stringify(filtered));



collection.fetch({
  success: function(collection) {
    console.log('fetch完了');
    collection.each(function(row){
      console.log(row.toJSON());
    });
    // console.log(JSON.stringify(collection, null, 2));
  }
});

// collection.fetch().then(function(collection) {
//   console.log('promiss fetch ')
// })

// console.log(JSON.stringify(collection, null, 2));
