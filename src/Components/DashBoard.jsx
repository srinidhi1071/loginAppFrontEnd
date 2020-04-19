import React from 'react';
import Header from './Header';
import SideBar from './SideBar'
import DashBoardContent from './DashBoardContent'


const DashBoard = ()=>{
   
    return(
        <div class="wrapper">
         <SideBar />
         <div id="content">
        <Header />
        <DashBoardContent />
        </div>
        </div>  
    )
}
export default DashBoard