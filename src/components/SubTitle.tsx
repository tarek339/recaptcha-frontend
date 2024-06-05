import { ISubTitle } from "../types/interfaces/components";

const SubTitle = ({ title, textAlign }: ISubTitle) => {
  return <h2 style={{ textAlign: textAlign }}>{title}</h2>;
};

export default SubTitle;
