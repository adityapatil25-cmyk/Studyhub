import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer  className='footer'>
      <div className='footer-made-by'>
        Made by a Student for all the Students
      </div>
      <div className='footer-copyright'>
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
      <div className='footer-made-with'>
        Made with <span className='footer-heart'>♥</span> by <b>Aditya Patil</b>
      </div>
      <div className='footer-contact'>
        Contact: <a href="mailto:adityaspatil252@gmail.com" className='footer-contact-link'>adityaspatil252@gmail.com</a>
      </div>
      <div className='footer-github-link'>
        GitHub:&nbsp;
        <a
          href="https://github.com/adityapatil25-cmyk"
          target="_blank"
          rel="noopener noreferrer"
          className='footer-github-link'
        >
          https://github.com/adityapatil25-cmyk
        </a>
      </div>
    </footer>
  );
};


export default Footer