import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Dashboard from './pages/Dashboard';
import { RequireAuth, RequireConfirmation } from './components/Authentication';
import VerifyPayment from './pages/payment/VerifyPayment';
import Layout from './components/Layout';
import Payment from './pages/payment/Payment';
import ConfirmPayment from './pages/payment/ConfirmPayment';
import Tutorial from './pages/tutorials/Tutorial';
import Html from './pages/tutorials/html/Html';
import HtmlHome from './pages/tutorials/html/HtmlHome';
import HtmlIntroduction from './pages/tutorials/html/HtmlIntroduction';
import HtmlEditors from './pages/tutorials/html/HtmlEditors';
import HtmlBasic from './pages/tutorials/html/HtmlBasic';
import HtmlAttributes from './pages/tutorials/html/HtmlAttributes';

const App = () => {
  return (
    <div className='lh-1.7'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route path='/' element={<Home />} />
          <Route path='/register_success' element={<RegistrationSuccess />} />
          <Route path='/tutorials' element={<Tutorial />} />
          <Route path='/tutorials/html' element={<Html />}></Route>
          <Route
            path='/tutorials/html/html-introduction'
            element={<HtmlIntroduction />}
          />
          <Route
            path='/tutorials/html/html-editors'
            element={<HtmlEditors />}
          />
          <Route path='/tutorials/html/html-basics' element={<HtmlBasic />} />
          <Route
            path='/tutorials/html/html-attributes'
            element={<HtmlAttributes />}
          />

          {/** private routes */}
          <Route element={<RequireAuth />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='payment' element={<Payment />} />
            <Route path='/verify_payment' element={<VerifyPayment />} />
            <Route path='/confirm-payment' element={<ConfirmPayment />}>
              <Route path=':reference' element={<ConfirmPayment />} />
            </Route>
          </Route>
          {/* <Route element={<RequireConfirmation />}>
            <Route path='/tutorials' element={<Tutorial />} />
          </Route> */}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
