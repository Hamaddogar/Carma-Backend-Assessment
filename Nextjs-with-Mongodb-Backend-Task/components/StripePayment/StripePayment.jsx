import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styles from './stripe.module.scss';

function StripePayment({ amount, children }) {
    const stripe = useStripe();
    const elements = useElements();
    const onSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            console.log(paymentMethod)
            fetch('/api/card', {
                method: 'POST',
                body: JSON.stringify({ id: paymentMethod, amount }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
            alert("PAYMENT dETAIL successfully saved")
        } else {
           alert(error.message);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <CardElement className={styles.root} options={{ style: { base: { color: '#fff' } } }} />
            {children}
            <button className='btn-primary' loader="{isLoadin ? 'loading' : ''}">Book Now</button>
        </form>
    );
};

export default StripePayment;