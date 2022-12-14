import React from 'react'
import { IoArrowBack } from "react-icons/io5";

export default function Employee(props) {
  return (
    <div className='employeeContainer container'>
      <div className='employeeHeader row'>
        <div className="col">
          <div className="row">
            <div className="col-1 backButtonContainer">
              <IoArrowBack onClick={() => props.resetState()} size={24} color="white"></IoArrowBack>
            </div>
            <div className="col-11 pathContainer">
              <h2><span>People</span>{' > '}<span>Employees</span>{' > '}<span>{props.data.name}</span></h2>
            </div>
          </div>
          <div className="row employeeTitle">
            <h1>Employee Details</h1>
          </div>
        </div>
      </div>
      <div className="employeeMain row">
        <div className="col-4 imgContainer">
          <img className="employeePhoto" src={props.data.photo} alt={`Photo of ${props.data.name}`} />
        </div>
        <div className="col-8 employeeInfo">
          <div className="row">
            <div className="col-4">
              <div className="row subheading"><p>Name:</p></div>
              <div className="row subheading"><p>Department:</p></div>
              <div className="row subheading"><p>Role:</p></div>
              <div className="row subheading"><p>Start Date:</p></div>
            </div>
            <div className="col-8">
              <div className="row"><p>{props.data.name}</p></div>
              <div className="row"><p>{props.data.department}</p></div>
              <div className="row role"><p>{props.data.role}</p></div>
              <div className="row"><p>{props.data.startDate}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
