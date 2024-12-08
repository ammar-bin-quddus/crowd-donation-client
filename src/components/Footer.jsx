import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Campaign Creation</a>
          <a className="link link-hover">Campaign Management</a>
          <a className="link link-hover">Fundraising Guidance</a>
          <a className="link link-hover">Donor Management</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie Policy</a>
          <a className="link link-hover">Refund Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
