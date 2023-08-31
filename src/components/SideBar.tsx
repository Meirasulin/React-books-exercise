import { arrOfData, firstBookDatils } from "../App";
const SideBar = () => {
  return (
    <div>
      <button onClick={() => console.log(firstBookDatils)}>First Book</button>
      <button onClick={() => console.log(arrOfData)}>All Books</button>
    </div>
  );
};
export default SideBar;
