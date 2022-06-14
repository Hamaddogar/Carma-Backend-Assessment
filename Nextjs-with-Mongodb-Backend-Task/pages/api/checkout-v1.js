import stripe from "../../lib/stripe";
import dbConnect from "../../lib/dbConnect";
import Payment from "../../models/Payment";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await dbConnect();
            const { customerId, amount } = req.body;
            const payment = await Payment.findOne({ customerId });
            const getPayment = await stripe.paymentIntents.create({
                amount,
                customer: customerId,
                currency: 'usd',
                confirm: true,
                description: 'Description',
                payment_method: payment.paymentId
            })
            res.json({message: "success"})
        }
        catch (err) {
            console.log(err);
        }
    }
    else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}