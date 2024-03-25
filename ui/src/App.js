import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HomePage, OrderPage, ProductPage, AuthPage, LoginForm, SignupForm} from './pages';
import { FaRegistered } from 'react-icons/fa';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/auth/login" element={<AuthPage />} />
            <Route path="/auth/register" element={<AuthPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
