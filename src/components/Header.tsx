import Title from "./Title ";
import { CSSProperties } from "react";
const styles: CSSProperties = {
  border: "20px",
  backgroundColor: "#f39a9a",
  display: "flex",
  justifyContent: "space-between",
};
const Header = () => {
  return (
    <header style={styles}>
      <Title data="header line" size="medium" />
      <button>Click Me</button>
    </header>
  );
};
export default Header;
