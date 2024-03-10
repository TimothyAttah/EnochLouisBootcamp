import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
import { authRouters } from './routes/authRoutes.js';
import paymentRoutes from './routes/payemtRoutes.js';
import https from 'https';

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome To Enoch Louis Coding Bootcamp School');
});

app.use('/api/auth', authRouters);
// app.use('/api/projectCleanEarth/pay', paymentRoutes);
app.use('/api/pay', paymentRoutes);
// app.use('api.paystack.co');

app.get('/api/paystack', function (req, res) {
  // const https = require('https');

  const params = JSON.stringify({
    amount: req.body.amount,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });

  // const params = JSON.stringify({
  //   amount: '60000',
  //   email: 'jane@gmail.com',
  //   firstname: 'Jane88',
  //   lastname: 'Dimer',
  // });

  console.log(params);

  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
      Authorization: 'Bearer sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
      'Content-Type': 'application/json',
    },
  };

  const requestPaystack = https
    .request(options, (resPaystack) => {
      let data = '';

      resPaystack.on('data', (chunk) => {
        data += chunk;
      });

      resPaystack.on('end', () => {
        // console.log(JSON.parse(data));
        res.json({ data: data });
        // res.send(data);
      });
    })
    .on('error', (error) => {
      console.error(error);
    });

  requestPaystack.write(params);
  requestPaystack.end();
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
