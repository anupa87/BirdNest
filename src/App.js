import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import { Layout } from './pages/Layout';
import DronesList from "./components/DronesList.js"
import DroneSingle from "./components/DroneSingle.js"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Layout/>}>
        <Route path='/' element= {<DronesList/>}/>
        <Route path='/drones/:drone' element= {<DroneSingle/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
