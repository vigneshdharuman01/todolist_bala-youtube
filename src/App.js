
import { useState } from 'react';
import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  
    const [items,setItems]=useState([
    {
      id:1,
      checked:true,
      work:"morning running at 6am"
    },
    {
      id:2,
      checked:false,
      work:"workout in gym"
    },
    {
      id:3,
      checked:false,
      work:"learn sql"
    }
  ]); 
  const [searchitems,setSearchitems]=useState("clear..")
  
  return (
    <div className="App">
    <Header/>
    <Content items={items} setItems={setItems} searchitems={searchitems} setSearchitems={setSearchitems}/>
    <Footer/>
    </div>
  );
}

export default App;
