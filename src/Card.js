import React from "react";

const Card = () => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot selfie" src="https://robohash.org/faz1?200x200" />
      <div>
        <h2>RoboFaz2</h2>
        <p>jane.doe@doemail.com</p>
      </div>
    </div>
  );
};

export default Card;
