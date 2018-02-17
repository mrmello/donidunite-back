const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
  user:     {type: String, required: true, unique: true, dropDups: true},
  password: {type: String, required: true, min: 6},
  name:     {type: String, required: true}
});

AdminSchema
.virtual('url')
.get(function () {
  return '/users/admin/' + this._id;
});

mongoose.model('Admin', AdminSchema);
