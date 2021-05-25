import React, { useState, useEffect } from 'react';
import { getSample } from '../services/testApi';

const DisplayData = () => {
  const [employees, setEmployees] = useState([]);
  const renderUser = async () => {
    setEmployees(await getSample());
  };
  useEffect(() => {
    renderUser();
  }, []);
  return (
    <div>
      <ol>
        {employees.map(
          ({ id, employee_name, employee_age, employee_salary }) => (
            <div key={id}>
              <li>
                Employee Name: {employee_name} Employee Age: {employee_age}{' '}
                Employee Salary: {employee_salary}
              </li>
            </div>
          )
        )}
      </ol>
    </div>
  );
};

export default DisplayData;
