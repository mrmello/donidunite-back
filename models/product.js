const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name:       {type: String, required: true, max: 100},
  price:      {type: Number, required: true, min: 0},
  category:   {type: Schema.ObjectId, ref: 'Category', required: true},
  images:     [],
  active:     {type: Boolean, required: true}
});

ProductSchema
.virtual('url')
.get(function () {
  return '/catalog/product/' + this._id;
});

mongoose.model('Product', ProductSchema);
