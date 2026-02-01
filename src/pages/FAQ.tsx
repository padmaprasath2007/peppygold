import { useState } from 'react'

const faqsUser = [
  {
    q: 'What is the minimum amount required to start saving in gold?',
    a: 'You can start saving in gold with as little as ₹100.',
  },
  {
    q: 'What types of gold saving schemes are available on Peppy Gold?',
    a: 'One-time, monthly, anytime, and product-based saving schemes are available.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. Peppy Gold has zero hidden charges.',
  },
  {
    q: 'Are there any platform charges for jewellers?',
    a: 'No platform charges are applied to jewellers.',
  },
]

const faqsPartner = [
  {
    q: 'How do I become a partner?',
    a: 'You can contact Peppy Gold through the Partner With Us section.',
  },
  {
    q: 'What are the benefits for partners?',
    a: 'Partners gain access to a wider customer base and digital tools.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fee is required.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {q}
        <span>{open ? '−' : '+'}</span>
      </button>

      {open && <div className="faq-answer">{a}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>

      <h2>For Users</h2>
      {faqsUser.map((item, i) => (
        <FAQItem key={i} q={item.q} a={item.a} />
      ))}

      <h2>For Partners</h2>
      {faqsPartner.map((item, i) => (
        <FAQItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  )
}
