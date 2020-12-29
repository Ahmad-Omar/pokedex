import React from "react";
import Heroimg from "../../assets/images/heroimg.png";
import Heroimgg from "../../assets/images/BannerComplete.png";
import "./style.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="wrapper">
        <div className="hero-container">
          <div className="text-side">
            <h1>
              Find
              <span> all your favorite </span>
              Pokemon
            </h1>
            <p>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </p>
            <a href="/">See pokemons</a>
          </div>
          <div className="img-side">
            <img src={Heroimgg} alt="Hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
