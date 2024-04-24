import React from "react";

import { useSelector } from "react-redux";
const Footer = () => {
  const state = useSelector((result) => {
    return result.IncDec.count;
  });
  return <div>Footer {state}</div>;
};

export default Footer;
