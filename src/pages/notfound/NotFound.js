import "./NotFound.scss";
import React from "react";

const NotFound = () => {
  return (
    <div className="notfound">
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_bhw1ul4g.json"
        background="transparent"
        speed=".7"
        style={{width:"500px",height:"500px",position:"fixed",top:"10px"}}
        loop
        autoplay
      ></lottie-player>

    </div>
  );
};

export default NotFound;
