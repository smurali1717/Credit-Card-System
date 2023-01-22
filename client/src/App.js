import React,{ useState }  from "react";


import Form from "./Components/Form"
import Table from "./Components/Table"
import Header from "./Components/Header"
import SubHeader from "./Components/SubHeader"
import './App.css';

function App() {
  const [stateUpdate, setStateUpdate] = useState(false);
    return (
        <div className="base">
            <div className="subbase">
                <Header headerText="Credit Card System"/>
                <SubHeader subHeaderText="Add Card"/>
                <Form updateStatus={setStateUpdate}/>             
                <Table refreshData={stateUpdate}/>
            </div>
        </div> 
    );  
}

export default App;
