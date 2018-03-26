const mongoose = require('mongoose');
const { Schema } = mongoose;
/* 
### TYPES ###
  product
  size
  dressing
  expense
  income
  payment
  status
  base
  additional
*/
const CategorySchema = new Schema({
  type:    {type: String, required: true},
  name:    {type: String, required: true, unique: true}
});

CategorySchema
.virtual('url')
.get(function () {
  return '/catalog/category/' + this._id;
});

mongoose.model('Category', CategorySchema);