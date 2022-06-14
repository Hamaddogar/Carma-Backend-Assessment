import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { CrediantialsSaver } from '../../RTK/Reducers/Reducers';
import './mycss.css';




export default () => {
    // Redux Hook
    const dispatch = useDispatch()

    // Payment Function
    const makePaymentFunction = (token) => {
        const body = { token }
        dispatch(CrediantialsSaver({ body }))
    }


    return (
        <>
            <div className="wrapper">
                {/* Navigation */}
                <nav className="main-nav">
                    <ul>
                        <li><a href="!#">Home</a></li>
                        <li><a href="!#">About</a></li>
                        <li><a href="!#">Services</a></li>
                        <li><a href="!#">Contact</a></li>
                    </ul>
                </nav>
                {/* Top container */}
                <section className="top-container">
                    <header className="showcase">
                        <h1>Payment GateWay Test Mode Stripe</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, est saepe vitae excepturi rem minima?</p>
                        <a className="btn" href="#">Read More</a>
                    </header>
                   
                    <div className="top-box top-box-b">
                        <h4>Pro Membership</h4>
                        <p className="price">$1/month</p>
                        <StripeCheckout
                            stripeKey={'pk_test_51KDF8oCBbduDchXTO6o9IMRzTQNHX2JLeW8DMIv70nHVzf0dQ6WLRVaarhvWtks2OQXu7yJlvkEolaZKdgeSOPMY00flGhH640'}
                            token={makePaymentFunction}
                            name={'Hamad Test'}
                            amount={100}
                        >
                            <a className="btn" style={{cursor:'pointer'}}>Buy Now stripe</a>
                        </StripeCheckout>

                    </div>
                    <div className="top-box top-box-a">
                        <h4>Membership</h4>
                        <p className="price">$199/month</p>
                    </div>
                </section>
                {/* Boxes section */}
                <section className="boxes">
                    <div className="box">
                        <i className="fas fa-chart-pie fa-4x" />
                        <h3>Analytics</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, officia.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-globe fa-4x" />
                        <h3>Marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, officia.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-cog fa-4x" />
                        <h3>Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, officia.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-users fa-4x" />
                        <h3>Support</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, officia.</p>
                    </div>
                </section>
                <section className="info">
                    <img src="https://images.pexels.com/photos/948887/pexels-photo-948887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <div>
                        <h2>Your business on the web</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus? Ipsam cum error dolorem adipisci itaque, ea ab dicta odio! Deleniti voluptatum, in temporibus nam et incidunt provident sed iure.</p>
                        <a className="btn" href="#">Learn More</a>
                    </div>
                </section>
                {/* Portfolio */}
                <section className="portfolio">
                    <img src="https://source.unsplash.com/random/200x200" alt="" />
                    <img src="https://source.unsplash.com/random/201x200" alt="" />
                    <img src="https://source.unsplash.com/random/202x200" alt="" />
                    <img src="https://source.unsplash.com/random/203x200" alt="" />
                    <img src="https://source.unsplash.com/random/204x200" alt="" />
                    <img src="https://source.unsplash.com/random/205x200" alt="" />
                    <img src="https://source.unsplash.com/random/206x200" alt="" />
                    <img src="https://source.unsplash.com/random/207x200" alt="" />
                    <img src="https://source.unsplash.com/random/208x200" alt="" />
                </section>
                {/* Footer */}
                <footer>
                    <p>Copy Right © 2022</p>
                </footer>
            </div>
            {/* Wrapper End */}

        </>
    );
}