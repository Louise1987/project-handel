var Product = require('components/prod');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product');

var products = [
    
    new Product({

    
    title: 'The Times',
    description: 'Daily news',
    price: 50

}),

new Product({
    
        
        title: 'The Magazine',
        description: 'Daily news',
        price: 30

    })
]