var Contact = require('./contact2');

var contact = new Contact({
  firstName: 'Alice',
  lastName: 'Henderson',
  email: 'alice@example.com'
}, { validate: true });

console.log(contact.toJSON());
console.log(contact.attributes)
console.log(JSON.stringify(contact, null, 4));

// hogeメソッドから独自のイベントを起動している
contact.hoge();


// オプションにvalidate:true を渡すとvalidationエラーなので書き変わらない
contact.set({
  lastName: ''
}, {
  validate: true
});
console.log(contact.toJSON());


// validateしないでnullにすると値が更新されるが、 isValid() メソッドはfalseとなる
contact.set({
  lastName: ''
});
console.log(contact.isValid());
console.log(JSON.stringify(contact, null, 4));
