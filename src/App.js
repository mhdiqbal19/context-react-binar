import { useState } from 'react';
import './App.css';
import Card from './Component/Card';
import LayoutContextProvider from './Context/LayoutContext';
import { mainContext } from './Context/mainContext';

function App() {

  const [data, setData] = useState({
    name: "Muhammad Iqbal",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
  })
  console.log(setData)

  const mainContextValue = {
    data
  }

  return (
    <div className="App">
      <mainContext.Provider value={mainContextValue}>
        <LayoutContextProvider>
          <Card/>
        </LayoutContextProvider>
      </mainContext.Provider>
    </div>
  );
}

export default App;
