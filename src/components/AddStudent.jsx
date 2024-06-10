import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "firstname":"",
            "lastname":"",
            "id":"",
            "college":"",
            "dob":"",
            "course":"",          
            "mobile":"",
            "email":"",
            "address":""
            
        }

    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
}
const readvalue=()=>{
    console.log(data)
    axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
        
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("successfully added")

                    }
                    else{
                        alert("error")
                    }


            }
        
    ).catch().finally()
}
    

 

 

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
                        <input type="text" className="form-control " name='firstname' value={data.firstname} onChange={inputHandler}/>
                        <br></br>
                     
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">LAST NAME</label>
                        <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>
                        <br></br>
                        
                       
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ROLL NO</label>
                        <input type="text" className="form-control " name='id' value={data.id} onChange={inputHandler}/>
                        <br></br>
                        </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">COLLEGE NAME</label>
                    <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                    <br></br>
                   
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DATE OF BIRTH</label>
                    <input type="date" name="dob" id="dob" className="form-control" value={data.dob} onChange={inputHandler}/>
                    <br></br>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">COURSE NAME</label>
                    <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
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