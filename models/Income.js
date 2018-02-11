const mongoose = require('mongoose');
const { Schema } = mongoose;

const IncomeSchema = new Schema({
  value:    {type: Number, required: true},
  category: {type: Schema.ObjectId, ref: 'Category', required: true},
  payment:  {type: Schema.ObjectId, ref: 'Payment', required: true},
  payee:    {type: Schema.ObjectId, ref: 'Admin'},
  date:     {type: Date, required: true}
});

IncomeSchema
.virtual('url')
.get(function () {
  return '/management/income/' + this._id;
});

mongoose.model('Income', IncomeSchema);
