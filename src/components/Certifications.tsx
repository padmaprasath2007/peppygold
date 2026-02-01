import startupIndia from '../assets/certifications/startup-india.png';
import dunsCert from '../assets/certifications/duns.png';
import dunsQR from '../assets/certifications/duns-qr.png';

export default function Certifications() {
  return (
    <section className="cert-section">
      <h2 className="cert-title">Our Certifications & Recognitions</h2>

      <div className="cert-grid">
        {/* Startup India */}
        <div className="cert-card">
          <img
            src={startupIndia}
            alt="Startup India Recognition"
            className="cert-image"
          />
          <h3>StartupIndia Recognition</h3>
          <p>
            Peppy Gold Technologies Private Limited is officially recognized by
            StartupIndia, validating our innovative approach to digital gold
            savings and our commitment to transforming the traditional gold
            investment landscape.
          </p>
        </div>

        {/* DUNS */}
        <div className="cert-card">
          <div className="cert-duns">
            <img
              src={dunsCert}
              alt="D-U-N-S Registration"
              className="cert-image"
            />
            <img
              src={dunsQR}
              alt="DUNS QR Code"
              className="cert-qr"
            />
          </div>

          <h3>D-U-N-S® Registration</h3>
          <p>
            We are proud to be registered with Dun & Bradstreet with D-U-N-S®
            Number: 77-267-8924. This certification reflects our verified global
            business identity, strengthening our credibility and trust among
            partners, customers, and stakeholders worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
