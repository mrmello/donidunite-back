const mongoose = require('mongoose');
const { Schema } = mongoose;

const IncomeSchema = new Schema({
  description:  {type: String, required: true},
  value:        {type: Number, required: true},
  category:     {type: Schema.ObjectId, ref: 'Category', required: true},
  payment:      {type: String, required: true},
  payee:        {type: Schema.ObjectId, ref: 'Admin'},
  date:         {type: Date, default: Date.now}
});
// payee seletacble
IncomeSchema
.virtual('url')
.get(function () {
  return '/management/income/' + this._id;
});

mongoose.model('Income', IncomeSchema);
