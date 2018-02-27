const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  totalValue:         {type: Number},
  date:               {type: Date, default: Date.now},
  deliveryDate:       {type: Date},
  customer:           {type: Schema.ObjectId, ref: 'Client'},
  deliveryAddress: {
    street:               {type: String},
    number:               {type: String},
    complement:           {type: String},
    city:                 {type: String},
    state:                {type: String},
    code:                 {type: String}
  },
  shoppingCart: [{
              product:     {type: Schema.ObjectId, ref: 'Product'},
              quantity:    {type: Number, required: true}
            }],
  paid:           {type: Boolean}
});

OrderSchema
.virtual('url')
.get(function () {
  return '/management/order/' + this._id;
});

mongoose.model('Order', OrderSchema);
