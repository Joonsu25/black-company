import { PropsWithChildren } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color: "primary" | "gray";
  sizeType: "sm" | "base" | "lg";
  leftIcon: boolean;
  type?: "button" | "submit" | "reset";
}

const btnType = {
  primary: "bg-primary text-paragraph",
  gray: "bg-gray-100 text-paragraph",
};

const btnSize = {
  sm: "py-1 px-3 rounded-sm min-w-[4rem]",
  base: "py-2 px-4 rounded-md min-w-[6rem]",
  lg: "py-3 px-5 rounded-lg min-w-[8rem]",
};

const Button = ({
  type = "button",
  color = "primary",
  sizeType = "base",
  leftIcon = false,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const btnStyle = `flex justify-center gap-2 ${btnType[color]} ${btnSize[sizeType]}`;
  return (
    <button className={btnStyle} onClick={onClick} type={type}>
      {leftIcon ? (
        <img src="/icons/plus.svg" alt="plus" width={"22px"} />
      ) : (
        <></>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
