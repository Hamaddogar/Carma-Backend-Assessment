import stripe from "../../lib/stripe";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { amount, id } = req.body;
            const payment = await stripe.paymentIntents.create({
                amount,
                currency: 'USD',
                description: "Your Company Description",
                payment_method: id,
                confirm: true,
            })
            console.log(payment);
            res.json({
                message: "Payment Successful",
                success: true,
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