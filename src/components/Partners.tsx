import partnersIcon from '../assets/partners/partners-icon.png';

import partner1 from '../assets/partners/priyanka.png';
import partner2 from '../assets/partners/g.png';
import partner3 from '../assets/partners/ags.png';
import partner4 from '../assets/partners/others.png';

export default function Partners() {
  const logos = [
    partner1,
    partner2,
    partner3,
    partner4,
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-header">
        <div className="partners-icon">
          <img src={partnersIcon} alt="Partners Icon" />
        </div>

        <h2>Our Trusted Partners</h2>
        <p>Grow your business with a powerful, easy-to-use tool.</p>
      </div>

      <div className="partners-marquee">
        <div className="partners-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="partner-logo" key={index}>
              <img src={logo} alt="Partner logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
