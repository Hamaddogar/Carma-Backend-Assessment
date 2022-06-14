import { useState } from 'react';
import StripePayment from '../components/StripePayment/StripePayment';
import InputRadio from '../ui/InputRadio/InputRadio';
import styles from './index.module.scss';

export default function Home() {
  const [form, setForm] = useState({ ship_method: 'standard' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const amount = form.ship_method === 'standard' ? 200 : 230;
  return (
    <div className={styles.root}>
      <ol className={styles.list}>
        {/* <li>Account</li>
        <li>Request</li> */}
        <li>Payment</li>
      </ol>
      <main className={styles.main}>
        <h2 className={styles.title}>Payment Info</h2>
        <div>
          <h4> Test Case USE</h4>
         VISA CARD  4242 4242 4242 4242
            
          {/* <div className={styles.inputWrapper}>
            <label htmlFor='standard'>Standard (Free)</label>
            <small>May Take up to 7 days</small>
            <InputRadio onChange={onChange} checked={form.ship_method === 'standard'} value='standard' id='standard' name='ship_method' />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='urgent'>24hr (+$30)</label>
            <small>Get in a day or less</small>
            <InputRadio onChange={onChange} checked={form.ship_method === 'urgent'} value='urgent' id='urgent' name='ship_method' />
          </div> */}
        </div>
        <div>
          <h4>Payment</h4>

          <StripePayment amount={amount}>
            {/* <h4>Summary</h4> */}
            {/* <div className={styles.paymentSection}>
              <p>Cameo Video</p>
              <b>${amount}</b>
            </div> */}
            {/* <div  className={styles.paymentSection}>
              <p>Service Fee</p>
              <p>$3</p>
            </div> */}
            {/* <div  className={styles.paymentSection}>
              <p>Total</p>
              <b>${3 + amount}</b>
            </div> */}
          </StripePayment>
        </div>
      </main>
    </div>
  )
}
