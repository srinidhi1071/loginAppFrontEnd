import React, { Component } from 'react';



const DashBoardContent =()=>{
        return(

                <div class="container">
                <div class="row">
                  <div class="col-sm">
                  <div class="card" style={{width: "18rem"}}>
                  
                  {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                  <div class="card-body">
                          <h5 class="card-title">Manage Books</h5>
                          <p class="card-text">Add,Modify and Delete Books</p>
                          <a href="#" class="btn btn-primary">Manage Books</a>
                </div>
                  </div>
                  </div>
                  <div class="col-sm">
                  <div class="card" style={{width: "18rem"}}>
                  {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                  <div class="card-body">
                          <h5 class="card-title">Manage Members</h5>
                          <p class="card-text">Add,Modify and Delete Members</p>
                          <a href="#" class="btn btn-primary">Manage Members</a>
                </div>
                  </div>
                   
                  </div>
                  <div class="col-sm">
                  <div class="card" style={{width: "18rem"}}>
                  {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                  <div class="card-body">
                          <h5 class="card-title">Issue Books</h5>
                          <p class="card-text">Issue Books to Student</p>
                          <a href="#" class="btn btn-primary">Issue Books</a>
                </div>
                  </div>
                   
                  </div>
                </div>
              </div>
        )


}

export default DashBoardContent