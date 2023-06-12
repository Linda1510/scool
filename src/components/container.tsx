type ContainerProops = () => {
  children: ReactNode;
  size: "md" | "sm";
};

const Container = ({ children, size }: ContainerProops) => {
  return <div className={`container container--${size}`}>{children}</div>;
};
export default Container;
