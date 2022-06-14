import { model, Schema, models } from 'mongoose';

const Payment = new Schema({
    details: Schema.Types.Mixed,
    customerId: String,
    paymentId: String
})

export default models.payment || model('payments', Payment);