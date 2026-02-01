export default function Board() {
  return (
    <section className="board-section">
      <h2 className="board-title">Board of Directors</h2>

      <div className="board-grid board-directors">
        <div className="board-item">
          <h3>Mr. Arun Pradeep</h3>
          <p>Founder & CEO, Global</p>
        </div>

        <div className="board-item">
          <h3>Mr. Emmanuel Mani</h3>
          <p>Co-Founder & CTO, Global</p>
        </div>

        <div className="board-item">
          <h3>Mr. Ravindran Subramaniam</h3>
          <p>Co-Founder & Head of Client Engagements, USA</p>
        </div>

        <div className="board-item">
          <h3>Mrs. Tabitha Emmanuel</h3>
          <p>Co-Founder & Head of Security & Compliances, Global</p>
        </div>

        <div className="board-item">
          <h3>Mr. Praveen Kumar</h3>
          <p>Regional Head of Business Development, India</p>
        </div>
      </div>

      <h2 className="board-title advisory-title">Advisory Board</h2>

      <div className="board-grid board-advisory">
        <div className="board-item">
          <h3>Mr. CR Venkatesh (CRV)</h3>
          <p>Founder & CEO - Dot Com Infoway</p>
        </div>

        <div className="board-item">
          <h3>Mr. Sethuraman Sathappan</h3>
          <p>COO (Retired) - Emirates NBD Bank, India</p>
        </div>

        <div className="board-item">
          <h3>Mrs. Ramadevi S</h3>
          <p>Founder and CEO of Elangi Thanga Maaligai</p>
        </div>
      </div>
    </section>
  );
}
