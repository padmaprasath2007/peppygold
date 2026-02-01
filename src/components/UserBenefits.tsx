import benefitsImage from '../assets/benefits/benefits-image.png';

export default function UserBenefits() {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">User Benefits</h2>

      <div className="benefits-layout">
        {/* LEFT SIDE */}
        <div className="benefits-column">
          <div className="benefit-box">India’s First Gold Savings Aggregator</div>
          <div className="benefit-box">Savings start at ₹100</div>
          <div className="benefit-box">Compare & Choose from Trusted Jewellers</div>
          <div className="benefit-box">Lock Price Today, Pay Later (Zero Interest)</div>
          <div className="benefit-box">Save 40–50% on Wastage & Labour Costs</div>
        </div>

        {/* CENTER IMAGE */}
        <div className="benefits-image-wrapper">
          <img src={benefitsImage} alt="User Benefits" />
        </div>

        {/* RIGHT SIDE */}
        <div className="benefits-column">
          <div className="benefit-box">
One-Time, Anytime, Monthly Savings Options</div>
          <div className="benefit-box">Natural 15–20% Appreciation Over Time</div>
          <div className="benefit-box">
100% Transparent, Secure, and Customer-Centric</div>
          <div className="benefit-box">Empowering Families, Strengthening Futures.</div>
          <div className="benefit-box">Trust and Reliability</div>
        </div>
      </div>
    </section>
  );
}
