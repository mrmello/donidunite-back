const mongoose = require('mongoose');
const { Schema } = mongoose;

const SizeSchema = new Schema({
  name:     {type: String, required: true, max: 100}
});

mongoose.model('Size', SizeSchema);
