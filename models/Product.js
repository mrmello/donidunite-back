const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  code:     String,
  name:     String,
  value:    Number,
  active:   Boolean
});

mongoose.model('products', productSchema);
