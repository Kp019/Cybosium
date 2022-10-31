import About from "./Components/about/about";
import Call from "./Components/call/call";
import Contact from "./Components/Contact/contact";
import Events from "./Components/events/events";
import Footer from "./Components/Footer/footer";
import Home from "./Components/home/home";
import Navbarc from "./Components/navbar/navbar";

function App() {
  return (
    <div className="App m-3">
      <Navbarc />
      <Home />
      <About />
      <Events />
      <Call />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
