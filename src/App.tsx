import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
