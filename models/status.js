const mongoose = require('mongoose');
const { Schema } = mongoose;

const StatusSchema = new Schema({
  name:     {type: String, required: true, max: 100}
});

mongoose.model('Status', StatusSchema);
