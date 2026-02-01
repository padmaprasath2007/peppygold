import qrAndroid from "../assets/qr-android.png";
import qriOS from "../assets/qr-ios.png";
import peppyLogo from "../assets/logo/peppy-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-col footer-brand">
          <img src={peppyLogo} alt="Peppy Gold" className="footer-logo" />

          <p className="footer-sub">Offers and Schemes.</p>

          <h3>
            Invest in <span>Peppy Gold</span> with Confidence,
            <br />
            and Safeguard Your Future.
          </h3>

          <button
            className="footer-btn"
            onClick={() => window.open('https://play.google.com/store', '_blank')}
          >
            Start Today
          </button>

          <div className="qr-section">
            <div>
              <img src={qrAndroid} alt="Android QR" />
              <p>Android</p>
            </div>
            <div>
              <img src={qriOS} alt="iOS QR" />
              <p>iOS</p>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <a href="#">How It Works</a>
          <a href="#">FAQ</a>
          <a href="#">Partner With Us</a>

          <h4 className="mt">LEGAL</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>CONTACT & SUPPORT</h4>

          <p>📞 +91 9600898971</p>
          <p>✉️ support@peppygold.com</p>
          <p>💬 WhatsApp Us</p>
          <p>📩 Contact Us Form</p>

          <h4 className="mt">FOLLOW US</h4>
          <div className="socials">
            <span>🐦</span>
            <span>💼</span>
            <span>📸</span>
            <span>📘</span>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="footer-col footer-address">
          <h4>HEAD OFFICE (MADURAI)</h4>
          <p>
            94/19, Mani Kothonar Street
            <br />
            Bypass Road, Opp. Central Warehouse
            <br />
            Madurai, Tamilnadu – 625016, India
          </p>
          <p className="gst">
            GSTIN: <strong>33AAPCP5394N1ZL</strong>
          </p>

          <h4 className="mt">CORPORATE OFFICE (CHENNAI)</h4>
          <p>
            No. 56, Radhakrishnan Salai
            <br />
            Palaniappa Nagar, Valasaravakkam
            <br />
            Chennai, Tamilnadu – 600087, India
          </p>

          <h4 className="mt">GLOBAL OFFICE (USA)</h4>
          <p>
            15901 Rolater Rd, Suite #402
            <br />
            Frisco, TX 75035, USA
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Peppy Gold Technologies. All rights reserved.
      </div>
    </footer>
  );
}
