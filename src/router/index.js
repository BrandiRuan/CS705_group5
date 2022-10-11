import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Homepage from '../components/Homepage.js';
import Document from '../components/Document.js'
import Test from '../components/Test.js'
import Tutorial from '../components/Tutorial.js';
import Contact from '../components/Contact.js'
import Fitts from '../components/Fitts.js'
import Group1 from '../components/group1Test.js'
import Group2 from '../components/group2Test.js'
// import FrontendAuth from '../components/FrontendAuth'

const App = (props) => {
  return(
    <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} ></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/document" element={<Document />}></Route>
        <Route path="/tutorial" element={<Tutorial />}></Route>
        {/* <Route path="/test" element={<Test />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/fitts" element={<Fitts />}></Route>
        <Route path="/group1" element={<Group1 />}></Route>
        <Route path="/group2" element={<Group2 />}></Route>
        {/* <Route path="/header" element={<Header />}></Route> */}
    </Routes>
  )
}

export default App
