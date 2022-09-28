
import './App.css';
import Card from './Component/Card/Card';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';


function App() {
  return (
    <div className="App bg-info ">

      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 m-20">
          <Header></Header>
          <br />
          <div className='grid grid-cols-3 gap-5'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>

        <div className=" col-span-1">
          <Navbar></Navbar>
        </div>
      </div>


    </div>
  );
}

export default App;
