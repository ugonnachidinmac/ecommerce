import React from "react";
import background1 from '../../data/background1.json';




const Section1 = () => {
  return (
    <>
      {Array.isArray(background1) && background1.map((el) => {
  return (
    <div
      className="nextDive"
      key={el.id}
      style={{
        backgroundImage: `url(${el.url})`,
        width: 300,
        height: 300,
      }}
    >
      <p>New Arrival</p>
      <div className="h2">
        <h2>Discover Our</h2>
        <h2>New Collection</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis.
      </p>
      <button>BUY Now</button>
    </div>
  );
})}
    </>
  );
};

export default Section1;



