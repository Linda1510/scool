import Button from "./components/button";
import Container from "./components/container";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Container>
        <h1>Hi</h1>
        <Button text="Click me!" />
        <Button color="red" text="Neki novi button" />
      </Container>
    </>
  );
}

export default App;
