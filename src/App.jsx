import React , { useState } from 'react'
import Dashboard from "./component/Dashboard"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Layout from "./Layout"
import Profile from './component/Profile'
import Parent from './component/Parent'
import Category from './component/Category'
import Upload from './component/Upload/Upload'


function App() {
  

  return (
    <div className=''>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="parent" element={<Parent />} />
          <Route path="category" element={<Category />} />
          <Route path="Upload" element={<Upload />} />


         
        </Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
