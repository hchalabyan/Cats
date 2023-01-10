import './App.css';
import Main from "./components/main/main";
import {Route, Routes} from "react-router-dom";
import Boxes from "./components/boxes/boxes";
import Header from "./components/header/header";
import Clothes from "./components/clothes/clothes";
import Hats from "./components/hats/hats";
import Sinks from "./components/sinks/sinks";
import Space from "./components/space/space";
import Sunglasses from "./components/sunglasses/sunglasses";
import Ties from "./components/ties/ties";
import SideBar from "./components/sideBar/sideBar";

function App() {
  return (
      <>
          <Header/>
          <div className="ContentWrapper">
              <SideBar/>
              <Routes>
                  <Route path="/" element={ <Main/>} />
                  <Route path="/boxes" element={ <Boxes/>} />
                  <Route path="/clothes" element={ <Clothes/>} />
                  <Route path="/hats" element={ <Hats/>} />
                  <Route path="/sinks" element={ <Sinks/>} />
                  <Route path="/space" element={ <Space/>} />
                  <Route path="/sunglasses" element={ <Sunglasses/>} />
                  <Route path="/ties" element={ <Ties/>} />
              </Routes>
          </div>

      </>

  );
}

export default App;
