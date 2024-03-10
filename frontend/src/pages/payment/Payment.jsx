import React, { useState } from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './PaymentStyles';
// import PaystackPop from '@paystack/inline-js';
import {
  paymentsMethod,
  startPayment,
} from '../../redux/actions/paymentActions ';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../redux/api';
import axios from 'axios';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    amount: '',
    email: '',
    firstname: '',
    lastname: '',
  });
  const { amount, email, firstname, lastname } = paymentData;
  const dispatch = useDispatch();

  const handleInputs = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { data } = await axios.get(`${baseURL}/paystack`, paymentData);

    // console.log(data);

    if (amount !== '' && email !== '' && firstname !== '' && lastname !== '') {
      console.log(paymentData);
      // const newTransaction = Json. {
      //   // amount: parseInt(amount),
      //   amount,
      //   email,
      //   firstname,
      //   lastname,
      // };

      const params = JSON.stringify({
        amount,
        email,
        firstname,
        lastname,
      });

      // console.log(newTransaction);

      dispatch(startPayment(paymentData));
      // navigate('/confirm-payment');
    }
  };
  return (
    <Styles.PaymentContainer>
      <Container>
        <FadeIn delay={0.2} direction='down'>
          <h1>Payment Information</h1>
        </FadeIn>
        <div>
          <form onSubmit={handleSubmit}>
            <Styles.PaymentInput>
              <FadeIn delay={0.4} direction='down'>
                <label htmlFor='amount'>Amount</label>
              </FadeIn>
              <FadeIn delay={0.4} direction='down'>
                <input
                  type='text'
                  name='amount'
                  value={amount}
                  required
                  onChange={handleInputs}
                />
              </FadeIn>
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <FadeIn delay={0.8} direction='down'>
                <label htmlFor='email'>Email</label>
              </FadeIn>
              <FadeIn delay={0.8} direction='down'>
                <input
                  type='text'
                  name='email'
                  required
                  value={email}
                  onChange={handleInputs}
                />
              </FadeIn>
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <FadeIn delay={0.6} direction='down'>
                <label htmlFor='name'>First Name</label>
              </FadeIn>
              <FadeIn delay={0.6} direction='down'>
                <input
                  type='text'
                  name='firstname'
                  required
                  value={firstname}
                  onChange={handleInputs}
                />
              </FadeIn>
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <FadeIn delay={0.6} direction='down'>
                <label htmlFor='name'>Last Name</label>
              </FadeIn>
              <FadeIn delay={0.6} direction='down'>
                <input
                  type='text'
                  name='lastname'
                  required
                  value={lastname}
                  onChange={handleInputs}
                />
              </FadeIn>
            </Styles.PaymentInput>

            <div>
              <Styles.PaymentCardContainer>
                <FadeIn delay={0.6} direction='up'>
                  <button
                    className='btn btn-primary rounded-pill'
                    type='submit'
                  >
                    Make Payment
                  </button>
                </FadeIn>
              </Styles.PaymentCardContainer>
            </div>
          </form>
        </div>
      </Container>
    </Styles.PaymentContainer>
  );
};

export default Payment;
