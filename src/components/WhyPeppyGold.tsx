import secureIcon from '../assets/why/secure.png';
import flexibleIcon from '../assets/why/flexible.png';
import zeroFeesIcon from '../assets/why/zero-fees.png';
import supportIcon from '../assets/why/support.png';

export default function WhyPeppyGold() {
  return (
    <section className="why-section" id="why">
      <h2 className="why-title">Why Peppy Gold ?</h2>

      <div className="why-grid">
        {/* Item 1 */}
        <div className="why-item">
          <div className="why-icon">
            <img src={secureIcon} alt="Secure Payments" />
          </div>
          <div>
            <h3>Secure Payments & Trusted Jewellers</h3>
            <p>
              Save and redeem your gold safely through verified jewellers.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="why-item">
          <div className="why-icon">
            <img src={flexibleIcon} alt="Flexible Savings" />
          </div>
          <div>
            <h3>Flexible Saving Options</h3>
            <p>
              Choose One-Time, Monthly, Anytime, or Product-based schemes.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="why-item">
          <div className="why-icon">
            <img src={zeroFeesIcon} alt="Zero Fees" />
          </div>
          <div>
            <h3>Zero Platform Fees</h3>
            <p>
              No hidden charges — invest 100% of your money.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="why-item">
          <div className="why-icon">
            <img src={supportIcon} alt="24/7 Support" />
          </div>
          <div>
            <h3>24/7 Support & Guidance</h3>
            <p>
              Friendly support team ready to assist whenever you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
