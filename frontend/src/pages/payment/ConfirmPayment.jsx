import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import { verifyPayment } from '../../redux/actions/paymentActions ';
import { useDispatch } from 'react-redux';
import * as Styles from './ConfirmPaymentStyles';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createPayment } from '../../redux/api';

const reference = localStorage.getItem('referenceCode');

const ConfirmPayment = () => {
  const navigate = useNavigate();
  const [referenceCode, setReferenceCode] = useState('');
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const url = 'https://enoch-louis-bootcamp.vercel.app/confirm-payment';

  useEffect(() => {
    if (searchParams.has('reference')) {
      const reference = searchParams.get('reference');
      // async function verifyPayments() {
      //   const { data } = await createPayment(reference);
      //   console.log('Verify Payment Data', data);
      // }

      // verifyPayments();

      dispatch(verifyPayment(reference));
    }
  }, [searchParams, dispatch]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // if (referenceCode === '') {
    //   toast.error('Please enter your reference code');
    // } else if (referenceCode !== reference) {
    //   toast.error('Reference code is invalid');
    // } else if (referenceCode === reference) {
    //   toast.success('Payment is confirmed');
    //   localStorage.setItem('isActive', 'true');
    //   // window.location.reload();
    // }

    navigate('/tutorials');
    // window.location.href = '/login';
  };
  return (
    <Styles.ConfirmPaymentContainer>
      <h1>Verify Payment</h1>
      {/* <Styles.InfoBox>
        <FadeIn delay={0.2} direction='down'>
          <h1>Confirm your payment </h1>
        </FadeIn>
        <FadeIn center='true' delay={0.4} direction='down'>
          <small>Please check your email for your receipt</small>
        </FadeIn>
      </Styles.InfoBox>
      <Styles.Form onSubmit={handleOnSubmit}>
        <FadeIn center='true' delay={0.6} direction='down'>
          <label htmlFor='payment'>Enter your reference code</label>
        </FadeIn>
        <FadeIn center='true' delay={0.8} direction='down'>
          <input
            type='text'
            name='referenceCode'
            value={referenceCode}
            onChange={(e) => setReferenceCode(e.target.value)}
          />
        </FadeIn>
        <FadeIn center='true' delay={0.6} direction='up'>
          <button>Submit Reference Code</button>
        </FadeIn>
      </Styles.Form> */}
      <Link to='/payment'>Make Payment Here.</Link>
    </Styles.ConfirmPaymentContainer>
  );
};

export default ConfirmPayment;
