import { useState } from 'react';

const partnerTestimonials = [
  {
    text: 'An absolutely fantastic platform, perfectly suited for the new generation of jewellers and investors!',
    name: 'Garudaa Gold Palace Pvt Ltd',
  },
  {
    text: 'Peppy Gold has transformed how we engage with customers digitally.',
    name: 'AGS Thangamaaligai',
  },
  {
    text: 'A highly reliable and transparent gold savings ecosystem.',
    name: 'Priyanka Bullion Pvt Ltd',
  },
  {
    text: 'Excellent platform with strong technical and business support.',
    name: 'Shree Gokulam Jewellers',
  },
  {
    text: 'A future-ready solution for the gold industry.',
    name: 'Dot Com Infoway',
  },
  {
    text: 'Professional team and seamless integration.',
    name: 'Elangi Thanga Maaligai',
  },
];

export default function PartnersSay() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + partnerTestimonials.length) % partnerTestimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % partnerTestimonials.length);
  };

  const current = partnerTestimonials[index];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">
        What Our Partner Say About Peppy Gold
      </h2>

      <div className="testimonials-wrapper">
        <button className="arrow-btn" onClick={prev}>
          ←
        </button>

        <div className="testimonial-card">
          <p className="testimonial-text">"{current.text}"</p>
          <h4 className="testimonial-name">{current.name}</h4>
        </div>

        <button className="arrow-btn" onClick={next}>
          →
        </button>
      </div>
    </section>
  );
}
