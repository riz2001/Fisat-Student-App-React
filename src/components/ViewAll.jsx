import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changedata] =useState([])
    const fetchData=()=>{
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (Response)=>{
                changedata(Response.data)
            }
        ).catch().finally()
}
useEffect(() => {fetchData()},[])
  return (
    <div>
        <NavBar/>
          <div class="card-body">

<div class="container">
    <h1 align="center">VIEW DETAILS</h1>
    <br></br>
    <div class="row g-3">
        <div className="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                        <th scope="col">FIRST NAME</th>
                        <th scope="col">LAST NAME</th>
                        <th scope="col">COLLEGE NAME</th>
                        <th scope="col">DOB</th>
                        <th scope="col">COURSE</th>
                        <th scope="col">MOBILE NO</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">ADDRESS</th>
                      

                    </tr>
                </thead>
                <tbody>

                {
                    data.map(
                        (value, index) => {
                            return <tr>
                                 <td>{value._id}</td>
                                <td>{value.firstname}</td>
                                <td>{value.lastname}</td>
                                <td>{value.college}</td>
                                <td>{ value.dob}</td>
                                <td>{ value.course}</td>
                                <td>{ value.mobile}</td>
                                <td>{ value.email}</td>
                                <td>{ value.address}</td>
                                <td>{ value._v}</td>




                            </tr>


                        }
                    )
                }
                </tbody>



            </table>
        </div>
    </div>
</div>

</div>


        



    </div>
  )
}

export default ViewAll