const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
  type:    {type: String, required: true},
  name:    {type: Number, required: true}
});

CategorySchema
.virtual('url')
.get(function () {
  return '/catalog/category/' + this._id;
});

mongoose.model('Category', CategorySchema);
