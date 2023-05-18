import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <small>
    
    <Typewriter
      options={{
        strings: [
          "IT Engineering Student",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </small>
  );
}

export default Type;
