import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
