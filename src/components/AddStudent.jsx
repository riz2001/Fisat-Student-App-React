import React, { useState } from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "fname":"",
            "lname":"",
            "rollno":"",
            "cname":"",
            "date":"",
            "coname":"",          
            "mobile":"",
            "email":"",
            "address":""
            
        }

    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
}
const readvalue=()=>(
    console.log(data)
    
)
 
 
 

  return (
    <div>
        <NavBar/>

<h1 align="center">ADD DETAILS</h1>
<br></br>
        <div class="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">FIRST NAME</label>
                        <input type="text" className="form-control " name='fname' value={data.fname} onChange={inputHandler}/>
                        <br></br>
                     
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">LAST NAME</label>
                        <input type="text" className="form-control" name='lname' value={data.lname} onChange={inputHandler}/>
                        <br></br>
                        
                       
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ROLL NO</label>
                        <input type="text" className="form-control " name='rollno' value={data.rollno} onChange={inputHandler}/>
                        <br></br>
                        </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">COLLEGE NAME</label>
                    <input type="text" className="form-control" name='cname' value={data.cname} onChange={inputHandler} />
                    <br></br>
                   
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DATE OF BIRTH</label>
                    <input type="date" name="date" id="date" className="form-control" value={data.date} onChange={inputHandler}/>
                    <br></br>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">COURSE NAME</label>
                    <input type="text" className="form-control" name='coname' value={data.coname} onChange={inputHandler} />
                    <br></br>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">MOBILE NO</label>
                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                    <br></br>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    <br></br>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ADDRESS</label>
                    <textarea name="address" id="address" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                    <br></br>
            
                    
                  
                    </div>
                    <center>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readvalue}>SUBMIT</button>
                  
                    </div>
                    </center>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default AddStudent