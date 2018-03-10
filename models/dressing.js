const mongoose = require('mongoose');
const { Schema } = mongoose;

const DressingSchema = new Schema({
  name:     {type: String, required: true, max: 100}
});

mongoose.model('Dressing', DressingSchema);
