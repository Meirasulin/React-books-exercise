import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title ";
import Book from "./components/Book";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
export const firstBookDatils = {
  srcImg:
    "https://cdn.discordapp.com/attachments/1008571088919343124/1146765097616801792/Uz_an_illustration_of_a_zen_master_pointing_at_the_camera_front_2916cb80-f295-4ef4-ae11-3cb1ff19bfc9.png",
  altImg: "master_pointing",
  bookName: "Master",
  width: "400px",
};

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Title data="my website" size="large" />
      </div>

      <Header />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          id="bookAndMian"
          style={{ display: "flex", flex: 5, flexDirection: "column" }}
        >
          <Book
            srcImg={firstBookDatils.srcImg}
            altImg={firstBookDatils.altImg}
            bookName={firstBookDatils.bookName}
            width="400px"
          />
          <Main />
        </div>
        <div
          id="sideBar"
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}
export const arrOfData = [
  {
    srcImg:
      "https://cdn.discordapp.com/attachments/1061944547246088242/1146437166625468517/meir_asulin_3D_miniature_Book_about_Cute_boy_astronaut_icon_whi_a0c0a8ac-77f1-4fb0-8d3b-f2a425e9d273.png",
    altImg: "astronaut book boy",
    bookName: "astronaut boy",
  },
  {
    srcImg:
      "https://cdn.discordapp.com/attachments/1061944547246088242/1146436525891014807/meir_asulin_3D_miniature_Book_icon_white_background_realistic_l_683fe2ae-a447-4e29-a440-213ffe20e8a5.png",
    altImg: "Home Book",
    bookName: "Home Book",
  },
  {
    srcImg:
      "https://cdn.discordapp.com/attachments/1061944547246088242/1146436180972408892/meir_asulin_3D_miniature_Book_icon_white_background_realistic_l_02fb970d-f0b1-4b55-a094-f487d42ac558.png",
    altImg: "trip Book",
    bookName: "trip Book",
  },
  {
    srcImg:
      "https://cdn.discordapp.com/attachments/1061944547246088242/1146421168321069117/meir_asulin_3D_miniature_Book_icon_white_background_realistic_l_dfa21755-9b3d-4510-9edf-21a653750596.png",
    altImg: "Mountain Book",
    bookName: "Mountain Book",
  },
];

export default App;
