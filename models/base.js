const mongoose = require('mongoose');
const { Schema } = mongoose;

const BaseSchema = new Schema({
  name:     {type: String, required: true, max: 100}
});

mongoose.model('Base', BaseSchema);
