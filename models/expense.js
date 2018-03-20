const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  description:  {type: String, required: true},
  value:        {type: Number, required: true},
  category:     {type: Schema.ObjectId, ref: 'Category', required: true},
  payment:      {type: String, required: true},
  payee:        {type: String, required: true},
  date:         {type: Date, default: Date.now},
  toWho:        {type: String, required: true}
});

ExpenseSchema
.virtual('url')
.get(function () {
  return '/management/expense/' + this._id;
});

mongoose.model('Expense', ExpenseSchema);

//donidunite@gmail.com
//oleodearroz
