// import { useState } from 'react';
import './App.css';
import Card from './Component/Card';
// import LayoutContextProvider from './Context/LayoutContext';
import LayoutContextNewProvider from './Context/LayoutContextNew';
// import MainContextNewProvider from './Context/MainContextNew';
// import { mainContext } from './Context/mainContext';
import MainContextNewProvider from './Context/mainContext';




function App() {

  // const [data, setData] = useState({
  //   name: "Muhammad Iqbal",
  //   avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
  // })
  // console.log("set Data", setData)

  // const mainContextValue = {
  //   data
  // }

  return (
    <div className="App">
      <MainContextNewProvider>
        <LayoutContextNewProvider>
          <Card/>
        </LayoutContextNewProvider>
      </MainContextNewProvider>
    </div>
  );
}

export default App;
