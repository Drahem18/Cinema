import "./App.css";
import Header from "./pages/Header";
import Banner from "./pages/Banner";
import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import BackToTopBtn from "./components/BackToTopBtn";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <BackToTopBtn />
    </>
  );
}

export default App;
