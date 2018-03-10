const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdditionalSchema = new Schema({
  name:     {type: String, required: true, max: 100}
});

mongoose.model('Additional', AdditionalSchema);
