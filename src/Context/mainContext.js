import React from 'react';
import { createContext, Component } from 'react';


export const MainContextNew = createContext();

class MainContextNewProvider extends Component {

    state = { 
        data: {
            name: "Muhammad Iqbal",
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            }
    }
    render() { 
        return ( 
            <MainContextNew.Provider value={{ ...this.state }}>
                {this.props.children}
            </MainContextNew.Provider>
        );
    }
}
 
export default MainContextNewProvider;