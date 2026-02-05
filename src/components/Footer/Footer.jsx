import React, { useState } from 'react';
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setStatus({ type: 'error', message: 'Please enter an email' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    try {
      setLoading(true);
      setStatus({ type: '', message: '' });

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Subscribed successfully!' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Error subscribing. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-top-left">
            <h1>Festus Kyalo</h1>
            <p>Improving Efficiency of Operations by Automating to the Best.</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              {/* Accessing from public folder */}
              <img src="/user_icon.svg" alt="user icon" />
              <input
                type="email"
                placeholder='Enter your Email:'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              className={`footer-subscribe ${loading ? 'disabled' : ''}`}
              onClick={!loading ? handleSubscribe : null}
            >
              {loading ? '...' : 'Subscribe'}
            </div>
          </div>
        </div>

        {status.message && (
          <div className={`footer-status-message ${status.type}`}>
            {status.message}
          </div>
        )}

        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">@Festus Kyalo. All rights reserved</p>
          <div className="footer-bottom-right">
            <p>Terms of services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer