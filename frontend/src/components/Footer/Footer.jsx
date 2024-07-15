import { assets } from "../../assets/assets";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="" />
          <p>
            <b>Khaja Ghar: Your Digital Nepali Eatery </b> <br></br>
            Discover authentic Nepali cuisine at your fingertips with Khaja
            Ghar. From comforting dal bhat to savory momos, we deliver the taste
            of the Himalayas to your doorstep. Our app offers a curated
            selection of traditional snacks, meals, and beverages, prepared with
            fresh ingredients and time-honored recipes. Experience the warmth of
            Nepal's kitchen with just a few taps - order from Khaja Ghar today.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-416-7809</li>
            <li>contactus@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {currentYear} - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
