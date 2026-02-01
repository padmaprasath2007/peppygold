import { useState } from 'react';

const testimonials = [
  {
    text: 'This app really good and easy to use... lots of offers and rewards in it .. so I highly recommend.. good app for saving gold.. 👍',
    name: 'Emmanal Emman',
    role: 'User',
  },
  {
    text: 'Very smooth experience. Easy payments and trustworthy platform.',
    name: 'Jaya Sri',
    role: 'User',
  },
  {
    text: 'Best app for systematic gold savings. Highly secure.',
    name: 'Ramesh Kumar',
    role: 'User',
  },
  {
    text: 'Simple UI and transparent pricing. Loved it!',
    name: 'Priya S',
    role: 'User',
  },
  {
    text: 'Gold saving made easy for everyone.',
    name: 'Suresh',
    role: 'User',
  },
  {
    text: 'Great support team and easy onboarding.',
    name: 'Anitha',
    role: 'User',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Loved by Users</h2>

      <div className="testimonials-wrapper">
        <button className="arrow-btn" onClick={prev}>
          ←
        </button>

        <div className="testimonial-card">
          <p className="testimonial-text">"{current.text}"</p>
          <h4 className="testimonial-name">{current.name}</h4>
          <span className="testimonial-role">{current.role}</span>
        </div>

        <button className="arrow-btn" onClick={next}>
          →
        </button>
      </div>
    </section>
  );
}
