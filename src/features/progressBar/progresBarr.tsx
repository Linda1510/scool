import Container from "../../components/container";

type ProgressBarType = {
  progress: number;
  color?: "red" | "grey" | "yelow";
};

const ProgressBar = ({ progress, color }: ProgressBarType) => {
  return (
    <Container>
      <div className="progressbar">
        <div
          style={{ width: `${progress}%` }}
          className={`progressbar__ww progressbar__ww--${progress}% progressbar__ww--${color}`}
        ></div>
      </div>
    </Container>
  );
};
export default ProgressBar;
