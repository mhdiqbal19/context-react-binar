import { Component, createContext } from "react";

 export const LayoutContext = createContext();

class LayoutContextProvider extends Component {

    state = { 
        nightMode: false,
        day: {
            color: "#000",
            background: "red"
        },
        night: {
            color: "#fff",
            background: "#000"
        },
    }
    
    handleTogle = () => {
        this.setState({
            nightMode: !this.state.nightMode,
        })
    }


    render() { 
        return ( 
            <LayoutContext.Provider value={
                { ...this.state, 
                  handleTogle: this.handleTogle 
                }}>

                {this.props.children}
            </LayoutContext.Provider>
        );
    }
}
 
export default LayoutContextProvider;