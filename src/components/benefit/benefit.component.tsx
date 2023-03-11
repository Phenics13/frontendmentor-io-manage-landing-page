import { FC } from "react";
import { BenefitT } from "../benefits/benefits.component";
import "./benefit.styles.scss";

const getFullNumber = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

const Benefit: FC<BenefitT> = ({ id, title, text }) => {
  const number = getFullNumber(id);
  return (
    <div className="benefit">
      <div className="benefit--icon">{number}</div>
      <h3 className="benefit--title">{title}</h3>
      <p className="benefit--text">{text}</p>
    </div>
  );
};

export default Benefit;
