const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaymentSchema = new Schema({
  name: {type: String, required: true}
});

PaymentSchema
.virtual('url')
.get(function () {
  return '/management/payment/' + this._id;
});

mongoose.model('Payment', PaymentSchema);
