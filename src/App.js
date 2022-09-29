
import './App.css';
import Content from './Component/Content/Content';
import FAQ from './Component/FAQ/FAQ';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';


function App() {
  return (
    <div className="App">

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="md:col-span-2 lg:col-span-3 md:grid-cols-2 lg:grid-cols-3 m-5 md:m-10 lg:m-20">
          <Header></Header>
          <br />
          <Content></Content>
          <br />
          <p className='text-3xl text-center font-semibold'>Question Answer</p>
          <br />
          <FAQ></FAQ>

        </div>

        <div className=" col-span-1">
          <Navbar></Navbar>
        </div>
      </div>


    </div>
  );
}

export default App;
