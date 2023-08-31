import Book from "./Book";
import { CSSProperties } from "react";
import { arrOfData } from "../App";

const images: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-end",
  justifyContent: "center",
};
const Main = () => {
  return (
    <div style={images}>
      <Book
        srcImg={arrOfData[0].srcImg}
        altImg={arrOfData[0].altImg}
        bookName={arrOfData[0].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[1].srcImg}
        altImg={arrOfData[1].altImg}
        bookName={arrOfData[1].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[2].srcImg}
        altImg={arrOfData[2].altImg}
        bookName={arrOfData[2].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[3].srcImg}
        altImg={arrOfData[3].altImg}
        bookName={arrOfData[3].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[0].srcImg}
        altImg={arrOfData[0].altImg}
        bookName={arrOfData[0].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[1].srcImg}
        altImg={arrOfData[1].altImg}
        bookName={arrOfData[1].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[2].srcImg}
        altImg={arrOfData[2].altImg}
        bookName={arrOfData[2].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[3].srcImg}
        altImg={arrOfData[3].altImg}
        bookName={arrOfData[3].bookName}
        width="200px"
      />{" "}
      <Book
        srcImg={arrOfData[0].srcImg}
        altImg={arrOfData[0].altImg}
        bookName={arrOfData[0].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[1].srcImg}
        altImg={arrOfData[1].altImg}
        bookName={arrOfData[1].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[2].srcImg}
        altImg={arrOfData[2].altImg}
        bookName={arrOfData[2].bookName}
        width="200px"
      />
      <Book
        srcImg={arrOfData[3].srcImg}
        altImg={arrOfData[3].altImg}
        bookName={arrOfData[3].bookName}
        width="200px"
      />
    </div>
  );
};
export default Main;
