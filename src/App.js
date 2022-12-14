import './App.css';
import { useEffect, useState } from 'react';

//component import
import EmployeeList from './components/EmployeeList';
import Employee from './components/Employee';
import Loading from './components/Loading';
import Error from './components/Error';

//API import
import axios from 'axios';

//Boostrap import
import bootstrap from 'bootstrap';

function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    getEmployeeData();
  }, [])

  useEffect(() => {
    
    if(!!selectedEmployee) {
      getEmployeeData(selectedEmployee)
    }

  }, [selectedEmployee])
  

  const getEmployeeData = (id) => {
    setLoading(true);

    let trueId = ''

    if (id && parseInt(id, 10) > 0) {
      trueId = parseInt(id, 10)
    }

    axios.get(`https://api.matgargano.com/employees/${trueId}`).then(response => {
      setEmployeeData(response.data);
      setLoading(false);
    })
  }

  const resetState = () => {
    setEmployeeData([])
    getEmployeeData();
    setSelectedEmployee(null);
  }
  

  return (
    <div className="app">
      {loading ? 
        //If waiting for API to return data, present loading
        <Loading></Loading>
      : 
        error ? 
        // If API doesn't return data, preseent error
        <Error></Error>

        :

        !!selectedEmployee ?
            //{/* Employee Profile */}
            <Employee resetState={resetState} data={employeeData}></Employee>
            

          : 
            
          !selectedEmployee &&
          //{/* Employee List */}
          <EmployeeList setSelectedEmployee={setSelectedEmployee} data={employeeData}></EmployeeList>
        }
      
    </div>
  );
}

export default App;
