const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
  email:        {type: String, required: true},
  name:         {type: String, required: true},
  surname:      {type: String, required: true},
  userName:     {type: String, required: true, unique: true},
  password:     {type: String, required: true, min: 6},
  dateEnrolled: {type: Date, default: Date.now},
  address: {
    street:     {type: String},
    number:     {type: String},
    complement: {type: String},
    city:       {type: String},
    state:      {type: String},
    code:       {type: String}
  }
});

ClientSchema
.virtual('url')
.get(function () {
  return '/users/client/' + this._id;
});

mongoose.model('Client', ClientSchema);
