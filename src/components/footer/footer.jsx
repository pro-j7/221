import React from 'react';
import './footer.css';
import logoImage from './logo.png';

function Footer() {
  return (
    <div className="outer-container">
      <div>
        <img src={logoImage} alt="로고" className="logo-img" />
      </div>
      <div className="container">
        <ul className="left-list">
          <li>
            <a href="https://www.nytimes.com/section/todayspaper">
              TODAY'S PAPER
            </a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/science">SCIENCE </a>
          </li>
          <li>
            <a href="https://cooking.nytimes.com/">COOKING</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/health">HEALTH</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/realestate">REAL ESTATE</a>
          </li>
        </ul>
        <ul className="right-list">
          <li>
            <a href="section7.html">SUBSCRIBE</a>
          </li>
          <li>
            <a href="section7.html">Corporate Subscriptions</a>
          </li>
          <li>
            <a href="section7.html">Education Rate</a>
          </li>
        </ul>
      </div>
      <div className="section-list">
        <a href="https://help.nytimes.com/hc/en-us/articles/115014792127-Copyright-notice">
          © 2024 The New York Times Company
        </a>
        <a href="https://www.nytco.com/">NYTCo</a>
        <a href="https://help.nytimes.com/hc/en-us/articles/115015385887-Contact-Us">
          Contact Us
        </a>
        <a href="https://help.nytimes.com/hc/en-us/articles/115015727108-Accessibility">
          Accessibility
        </a>
        <a href="https://www.nytco.com/careers/">Work with us</a>
        <a href="https://advertising.nytimes.com/">Advertise</a>
        <a href="https://advertising.nytimes.com/custom-content/">
          T Brand Studio
        </a>
        <a href="https://www.nytimes.com/privacy/cookie-policy#how-do-i-manage-trackers">
          Your Ad Choices
        </a>
        <a href="https://help.nytimes.com/hc/en-us/articles/10940941449492">
          Privacy Policy
        </a>
        <a href="https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service">
          Terms of Service
        </a>
        <a href="https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale">
          Terms of Sale
        </a>
        <a href="https://www.nytimes.com/sitemap/">Site Map</a>
        <a href="https://help.nytimes.com/hc/en-us">Help</a>
        <a href="https://www.nytimes.com/subscription?campaignId=37WXW">
          Subscriptions
        </a>
      </div>
    </div>
  );
}

export default Footer;
