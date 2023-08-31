import Title from "./Title ";
import { CSSProperties } from "react";
type Props = {
  srcImg: string;
  altImg: string;
  bookName: string;
  width: string;
};
const Book = (props: Props) => {
  const image: CSSProperties = {
    width: props.width,
    height: "auto",
    display: "flex",
  };
  return (
    <div style={{ margin: "30px" }}>
      <Title data={props.bookName} size={"small"} />
      <img style={image} src={props.srcImg} alt={props.altImg} />
      <span>Book image created by AI</span>
    </div>
  );
};
export default Book;
