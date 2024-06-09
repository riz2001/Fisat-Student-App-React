import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
    const [data,setData]=useState(
        {
          "hname":""
        }
      )
        const inputHandler=(event)=>{
          setData({...data,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
          console.log(data)
        }
  return (
    <div>
        <NavBar/>
        <h1 align="center">SEARCH</h1>
        <br></br>
        <div className="container">
        <div className="row ">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <label htmlFor="" className="form-label"></label>
                   
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-6">
                      <center>
                        <label htmlFor="" className="form-label"> STUDENT NAME</label>
                        </center>
                        <input type="text" className="form-control" name='hname' value={data.hname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
                    <label htmlFor="" className="form-label"></label>
                    </div>
                    <center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                        <button className="btn btn-success" onClick={readvalue}>SEARCH</button>
                    </div>
                    </center>
                </div>
            </div>
        </div>
      </div>
        


    </div>
  )
}

export default SearchStudent