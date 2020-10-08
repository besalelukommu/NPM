const _ = require('lodash');

const numbers = [33,42,53,14,44,61,56,89,11];

_.each(numbers, function(number,i){
    console.log(number);
});