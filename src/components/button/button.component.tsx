import { ButtonHTMLAttributes, FC, ReactNode } from "react";

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
  buttonType?: BUTTON_TYPES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ buttonType, children, ...otherProps }) => {
  const buttonClass = getButtonClass(buttonType);
  return (
    <button className={`${buttonClass} button`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
