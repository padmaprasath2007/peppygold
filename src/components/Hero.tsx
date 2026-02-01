import heroImage from '../assets/hero/hero-image.png'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>
            Secure Your Future with the <br />
            Best Gold Saving Platform
          </h1>

          <p className="hero-subtext">
            ✨ We help you shine in every moment of life ✨
          </p>

          <p className="hero-description">
            Start saving gold digitally with trusted jewellers, zero platform
            fees, and complete transparency. Simple, secure, and smart.
          </p>

          <div className="hero-buttons">
            <a
    href="https://play.google.com/store/apps/details?id=com.peppygold.user"
    target="_blank"
    rel="noopener noreferrer"
  >
            <button className="store-btn playstore">Google Play</button>
            </a>
              <a
    href="https://apps.apple.com/app/peppy-gold-offers-schemes/id6755230672"
    target="_blank"
    rel="noopener noreferrer"
  > 
            <button className="store-btn appstore">App Store</button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
      <div className="hero-right">
  <div className="hero-image-float">
    <img
      src={heroImage}
      alt="Gold saving illustration"
      className="hero-image"
    />
  </div>
</div>


      </div>
    </section>
  )
}
