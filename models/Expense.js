const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  value:    {type: Number, required: true},
  category: {type: Schema.ObjectId, ref: 'Category', required: true},
  payment:  {type: Schema.ObjectId, ref: 'Payment', required: true},
  payee:    {type: Schema.ObjectId, ref: 'Admin'},
  date:     {type: Date, required: true}
});

ExpenseSchema
.virtual('url')
.get(function () {
  return '/management/expense/' + this._id;
});

mongoose.model('Expense', ExpenseSchema);
