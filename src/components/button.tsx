type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
};

const Button = ({ text, color = "green" }: ButtonProps) => {
  return <div>hi</div>;
};
export default Button;
