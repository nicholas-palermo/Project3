import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function EmployeeList(props) {

    const setEmployee = (id) => {
        props.setSelectedEmployee(id)
    }

    return (
        <div className='rosterContainer container'>
            <div className='rosterHeader row'>
                <h2><span>People</span>{' > '}<span>Employees</span></h2>
                <h1>{props.data.length} People</h1>
                <div className='rosterSettings'>
                    <div className='searchBar'>
                        <FaSearch color='rgb(69, 69, 69)' size={18} />
                        <input style={{backgroundColor: 'rgb(38,38,38)', border: 'none', fontSize: '14px', fontWeight: '700', color: 'white'}} className='searchInput' placeholder='Search'></input>
                    </div>
                    <select name="department" id="department">
                        <option value="Department" disabled selected>Department</option>
                        <option value="All">All</option>
                        <option value="IT">IT</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Sales">Sales</option>
                        <option value="Project Managment">Project Management</option>
                    </select>
                    <select name="sortBy" id="sortBy">
                        <option value="Sort By" disabled selected>Sort By</option>
                        <option value="firstName">First Name (A-Z)</option>
                        <option value="lastName">Last Name (A-Z)</option>
                        <option value="department">Department (A-Z)</option>
                    </select>
                </div>
            </div>
            <div className="rosterList container row">
                <div className='rosterListHeader row'>
                    <h3 className='col-7'>Full Name</h3>
                    <h3 className='col-5'>Department</h3>
                </div>
                {props.data.map(employee => {
                    return (
                        <div onClick={() => { setEmployee(employee.id) }} className='employee row'>
                            <h4 className='col-7'>{employee.name}</h4>
                            <h4 className='col-5'>{employee.department}</h4>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
