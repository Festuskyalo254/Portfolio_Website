import './Footer.css'

const Footer = () => {
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
                  <input type="email" placeholder='Enter your Email:' />
              </div>
              <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
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