// import React from 'react';
// import { useState } from 'react';
// import { createContext } from 'react';


// export const MainContextNew = createContext();

// const MainContextNewProvider = (props) => {
//     const [data, setData] = useState({
//         data: {
//         name: "Muhammad Iqbal",
//         avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
//         }
//     })
//     console.log("ini setdata", setData);
//   return (
//     <div>
//         <MainContextNew.Provider value={{ ...data }}>
//             {props.children}
//         </MainContextNew.Provider>
//     </div>
//   )
// }

// export default MainContextNewProvider