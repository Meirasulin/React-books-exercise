import { CSSProperties } from "react";
const getDate = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    " " +
    day +
    "/" +
    month +
    "/" +
    year +
    " " +
    hour +
    ":" +
    minutes +
    ":" +
    seconds +
    " "
  );
};

const divStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f39a9a",
  border: "10px",
  position: "sticky",
};
const textStyle: CSSProperties = {
  color: "white",
};

const Footer = () => {
  return (
    <div style={divStyle}>
      <span style={textStyle}>Meir Asulin </span>
      <p></p>
      <span style={textStyle}>{getDate()}</span>
    </div>
  );
};
export default Footer;
