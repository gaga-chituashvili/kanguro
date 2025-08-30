import "./App.css";
import Home from "./pages/Home";
import AppRoutes from "./AppRoutes";
import Header from "../src/component/Header";
import "../src/reset.css"

function App() {
  return (
    <section className="App">
      <Header/>
      <AppRoutes />
    </section>
  );
}

export default App;

