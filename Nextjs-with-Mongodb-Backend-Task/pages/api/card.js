import dbConnect from "../../lib/dbConnect";
import Payment from "../../models/Payment";
import stripe from "../../lib/stripe";


export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            console.log(req.body)
            await dbConnect();
            const { id, email } = req.body;
             console.log(req.body)
            const details = await stripe.customers.create({
                payment_method: id,
                email,
                description: "Your Company Description",
                invoice_settings: {
                    default_payment_method: id,
                }
            })
            const payment = new Payment({ details, customerId: details.id, paymentId: id });
            await payment.save()
            res.send({
                message: "Payment Successful",
                success: true
            });
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