// modules
const SearchComponent = {} //kolla sluttag!!

var mongoose = require('mongoose');
var textSearch = require('mongoose-text-search');

// create our schema
var productSchema = mongoose.Schema({
    name: String
  , tags: [String]
  , likes: Number
  , created: Date
});

// give our schema text search capabilities
productSchema.plugin(textSearch);
 
// add a text index to the tags array
productSchema.index({ tags: 'text' });
 
// test it out
var Product = mongoose.model('Product', productSchema);
 
Product.create({ name: 'The Times', tags: ['news', 'magazine'] }, function (err) {
  if (err) return handleError(err);
 
  Product.textSearch('news', function (err, output) {
    if (err) return handleError(err);
 
    var inspect = require('util').inspect;
    console.log(inspect(output, { depth: null }));
  
  
  
  });
});

