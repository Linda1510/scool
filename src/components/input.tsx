import { ReactNode } from "react";
import IconNotification from "./../assets/icons/download";
type InputProops = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm " | "md" | "lg";
};
const Input = ({ placeholder = "", icon }: InputProops) => {
  return (
    <div className="input__wrapper">
      <div className="input__icon">{icon}</div>
      <input
        placeholder={placeholder}
        className={`input ${icon && "input--hasIcon"}`}
        type="text"
      />
    </div>
  );
};
export default Input;
