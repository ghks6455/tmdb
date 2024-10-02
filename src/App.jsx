import "./App.css";

import Header from "./components/Header";

import { MovieProvider } from "./provider/MovieProvider";
import Main from "./components/Main";
function App() {
  return (
    <>
      <MovieProvider>
        <Header />
        <Main />
      </MovieProvider>
    </>
  );
}

export default App;
