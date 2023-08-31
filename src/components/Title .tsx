// import { CSSProperties } from "react";
type Props = {
  data: string;
  size: "small" | "medium" | "large";
};

const Title = (props: Props) => {
  let sizes: string = "15px";
  if (props.size === "large") sizes = "45px";
  if (props.size === "medium") sizes = "30px";
  return (
    <>
      <p style={{ fontSize: sizes }}>{props.data}</p>
    </>
  );
};
export default Title;
