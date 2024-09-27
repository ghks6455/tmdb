import "./App.css";
import Discover from "./components/Discover";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./provider/MovieProvider";
function App() {
  return (
    <>
      <Header />
      <main>
        <MovieProvider>
          <Discover />
          <MovieList />
        </MovieProvider>
      </main>
    </>
  );
}

export default App;
