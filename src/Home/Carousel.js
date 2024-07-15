import '../styles/Home/Carousel.scss';

export default function Carousel() {

  return (
    <div className="carousel">
      <div className="carousel-nav">
        <button className="carousel-nav-btn op-btn">
          Our partners
        </button>

        {/*separator*/}
        <div className="sep"></div>

        <button className="carousel-nav-btn pnp-btn">
          Plans and pricing
        </button>

        {/*separator*/}
        <div className="sep"></div>

        <button className="carousel-nav-btn htu-btn">
          How to use?
        </button>

        {/*separator*/}
        <div className="sep"></div>

        <button className="carousel-nav-btn ft-btn">
          Features
        </button>
      </div>

      <div className="carousel-images">
        {/*develop this section*/}
      </div>
    </div>
  );
}
