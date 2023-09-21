import React from "react";

export default Image = ({ src, alt, ariaHidden = "false" }) => (
  <img src={src} alt={alt} aria-hidden={ariaHidden} />
);
