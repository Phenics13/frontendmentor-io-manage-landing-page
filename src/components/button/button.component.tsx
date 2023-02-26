import { FC, ReactNode } from "react";

import "./button.styles.scss";

export enum BUTTON_TYPES {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const getButtonClass = (type: BUTTON_TYPES = BUTTON_TYPES.PRIMARY): string =>
  ({
    [BUTTON_TYPES.PRIMARY]: "button--primary",
    [BUTTON_TYPES.SECONDARY]: "button--secondary",
  }[type]);

type ButtonProps = {
  children: ReactNode;
  type?: BUTTON_TYPES;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ type, children, ...otherProps }) => {
  const buttonClass = getButtonClass(type);
  return (
    <button className={`${buttonClass} button`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
