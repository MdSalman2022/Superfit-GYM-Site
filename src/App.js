
import './App.css';
import Content from './Component/Content/Content';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';


function App() {
  return (
    <div className="App  ">

      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 m-20">
          <Header></Header>
          <br />
          <Content></Content>

        </div>

        <div className=" col-span-1">
          <Navbar></Navbar>
        </div>
      </div>


    </div>
  );
}

export default App;
