import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

import "./styles/styles.scss";
import Home from "./features/home";
import NoMatch from "./features/no-match";
import Contact from "./features/contact/contact";
import ProgressBar from "./features/progressBar/progresBarr";
import Animals from "./features/animal/animal";
import LoaderPage from "./features/loader/loader-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="animals" element={<Animals />} />
          <Route path="loader" element={<LoaderPage />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="progress-bar"
            element={<ProgressBar color="red" progress={50} />}
          />
          <Route path="animals" element={<Animals />} />
          <Route path="animals/new" element={<>Novi page</>} />
          <Route path="animals/:animalId" element={<>neke životinja</>} />

          {/* Using path="*" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
