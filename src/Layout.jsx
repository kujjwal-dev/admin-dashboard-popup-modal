import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import StickyBox from 'react-sticky-box'

function Layout(){
    return(
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-auto'>

        <Sidebar />
        
        <div className='flex-1'>
        <Header />
        <div className='p-4'>{<Outlet />}</div>
        </div>
        
        

    </div>)
    

}


export default Layout;
