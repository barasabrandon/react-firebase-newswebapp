import React from 'react';
import './JoinUsSuccess.css';

export default function JoinUsSuccess() {
  return (
    <div className="join-success">
      <div className="join-success-img-container">
        <img src="/images/congratulations.jpg" alt="Congratulations" />
      </div>
      <div className="join-success-footer-success">
        Your request has been submitted succesfully awaiting approval.
        <br /> You will receive a confirmation email after 48hours. <br />
        If not please send email info@newswebapp.com highlighting the error.
      </div>
    </div>
  );
}
