import React , { useState } from 'react'
import Dashboard from "./component/Dashboard"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Layout from "./Layout"
import Profile from './component/Profile'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />

         
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
