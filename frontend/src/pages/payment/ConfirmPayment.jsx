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
// import https from 'https-browserify';

const reference = localStorage.getItem('referenceCode');

const ConfirmPayment = () => {
  const navigate = useNavigate();
  const [referenceCode, setReferenceCode] = useState('');
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has('reference')) {
      const reference = searchParams.get('reference');
      const url = `https://api.paystack.co/transaction/verify/:${reference}`;
      async function verifyPayments() {
        const { data } = await axios.get(url, {
          headers: {
            Authorization:
              'Bearer sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
          },
        });

        console.log('This is verifyPayments data', data);
      }

      verifyPayments();

      // dispatch(verifyPayment(reference));
    }
  }, [searchParams]);

  // const https = require('https');

  // const options = {
  //   hostname: 'api.paystack.co',
  //   port: 443,
  //   path: `/transaction/verify/:${reference}`,
  //   method: 'GET',
  //   headers: {
  //     Authorization: 'Bearer sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
  //   },
  // };

  // https
  //   .request(options, (res) => {
  //     let data = '';

  //     res.on('data', (chunk) => {
  //       data += chunk;
  //     });

  //     res.on('end', () => {
  //       console.log(JSON.parse(data));
  //     });
  //   })
  //   .on('error', (error) => {
  //     console.error(error);
  //   });

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

    // navigate('/tutorials');
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
