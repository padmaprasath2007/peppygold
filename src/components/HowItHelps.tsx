import step1 from '../assets/how-it-helps/step1.png'
import step2 from '../assets/how-it-helps/step2.png'
import step3 from '../assets/how-it-helps/step3.png'

export default function HowItHelps() {
  return (
    <section className="how-section" id="how-it-helps">
      <h2 className="how-title">Enrich Your Future in 3 Golden Steps</h2>

      <div className="how-grid">
        <div className="how-card">
          <img src={step1} className="how-image" />
          <div className="how-content">
            <h3>Start Saving Gold with Confidence</h3>
            <p>At Peppy Gold, trust is the heart of everything we do. Our secure gold saving platform ensures a smooth and rewarding journey — helping you turn every small saving into a lifetime of golden security. Whether you’re starting today or planning for tomorrow, Peppy Gold is your trusted partner for effortless gold savings. Create your account in minutes with a quick and secure KYC process.</p>
          </div>
        </div>

        <div className="how-card">
          <img src={step2} className="how-image" />
          <div className="how-content">
            <h3>Smart Solutions</h3>
            <ul>
              <li>Load your wallet using UPI</li>
              <li>Use net banking with ease</li>
              <li>Pay with debit or credit cards</li>
              <li>Zero hassle and instant loading</li>
            </ul>
          </div>
        </div>

        <div className="how-card">
          <img src={step3} className="how-image" />
          <div className="how-content">
            <h3>Boost Savings</h3>
            <ul>
              <li>Smart Saving Analytics: Get clear insights into your saving patterns and optimize your growth.</li>
              <li>Milestone Rewards: Celebrate important saving achievements with exciting bonuses.</li>
              <li>Automated Goal Management: Set your dreams in gold — and let Peppy Gold help you reach them effortlessly.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
