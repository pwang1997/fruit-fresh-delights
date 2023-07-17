import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BasketProvider } from "./pages/BasketContext";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <BasketProvider>
        <Header />
        <Router />
        <Footer />
      </BasketProvider>
    </div>
  );
}

export default App;
