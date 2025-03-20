import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './Table';
import Popup from './Popup';
import { useState } from 'react';

function App() 
{
  const [show, setShow] = useState(false);

  const [temp, setTemp] = useState({ })

  const handleClose = () => setShow(false);
  const handleShow = (d) => {
    setTemp(d);
    setShow(true);
  }

  const [bool, setBool] = useState(false);

  // console.log(temp)
  return (
    <>
      
      <TableComponent boxVis={handleShow} status={bool} setStatus={setBool}/>
      <Popup boxShow={show} boxHide={handleClose} d={temp} upd={setTemp} status={bool} setStatus={setBool}/>
    </>
  )
}

export default App
