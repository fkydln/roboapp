import React from "react";
import { Fragment } from "react";

const Card = ({ name, email, id }) => {
  return (
    <Fragment>
      <h1>Swipe it</h1>
      <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robot selfie" src={`https://robohash.org/${id}?200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
