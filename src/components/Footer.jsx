import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>LUXE.</h2>
      <p>Curated premium essentials for the modern individual.</p>

      <div className="footer-grid">
        <div>
          <h4>Shop</h4>
          <p>New Arrivals</p>
          <p>Best Sellers</p>
          <p>Accessories</p>
          <p>Footwear</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Sustainability</p>
          <p>Press</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Shipping & Returns</p>
          <p>Size Guide</p>
        </div>
      </div>

      <p className="copyright">
        © 2026 LUXE. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
