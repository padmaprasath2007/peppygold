import { Link } from 'react-router-dom'
import peppyLogo from '../assets/logo/peppy-logo.png'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={peppyLogo} alt="Peppy Gold" className="navbar-logo" />
        </Link>
      </div>

      <nav className="nav-center">
        <Link to="/#top">Home</Link>
        <Link to="/#why">Why Peppy Gold</Link>
        <Link to="/#how-it-helps">How It Helps</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/#partners">Partners</Link>
      </nav>

      <div className="nav-right">
        <span className="price">Gold ₹16800/gm</span>
        <span className="price">Silver ₹425/gm</span>
        <button className="cta-btn">Get Started</button>
      </div>
    </header>
  )
}
