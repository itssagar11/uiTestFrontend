import React from 'react'
import { Outlet } from "react-router-dom";
import './style.css'
export default function Menu() {
  return (
    <div className="container">
        <div className='menu'>
            <h2> Banking Application</h2>
            <a href='/'>Customer</a>
            <a href='/deposit'>New Deposit</a>
            <a href='/withdrawal'>withdrawal</a>
            <a href='/cheque'>Cheque Deposit</a>
            <a href='/balance'>Balance</a>
         
        </div>
        
        <div className=" main">
          <Outlet />
        </div>
      
      
      
      </div>
  
  )
}
