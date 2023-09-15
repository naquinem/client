import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axiosClient from "./axios";


function Component() {

  const [data, setData] = useState([]);
  useEffect(() => {
      axiosClient
        .get('/user')
        .then(res => setData(res.data))
        .catch (error => console.log(error));
  }, []);
  return (
    <div className='container'>
      <div className='my-5 h-10 d-inline-block'>
        <h1>Dashboard</h1>
      </div>
      <div className='text-center h-90 d-inline-block'>
        <h3 className='my-3'>
          Employee TMS
        </h3>
        <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <th className='bg-info w-sm'></th>
                <th colSpan='2' className='bg-info'>Monday</th>
                <th colSpan='2' className='bg-info'>Tuesday</th>
                <th colSpan='2' className='bg-info'>Wednesday</th>
                <th colSpan='2' className='bg-info'>Thursday</th>
                <th colSpan='2' className='bg-info'>Friday</th>
                <th colSpan='2' className='bg-info'>Saturday</th>
                <th colSpan='2' className='bg-info'>Sunday</th>
                <th className='bg-info'>Total Overtime</th>
                <th className='bg-info'>Total Hours</th>
              </tr>
              <tr>
                <td>Date</td>
                <td>In</td>
                <td>Out</td>
                <td>In</td>
                <td>Out</td>
                <td>In</td>
                <td>Out</td>
                <td>In</td>
                <td>Out</td>
                <td>In</td>
                <td>Out</td>
                <td>In</td>
                <td>Out</td>
                <td>In</td>
                <td>Out</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {data.map((employee, key) => {
                return (
                  <tr key={key}>
                    <td>{employee.date}</td>
                    <td>{employee.monIn}</td>
                    <td>{employee.monOut}</td>
                    <td>{employee.tueIn}</td>
                    <td>{employee.tueOut}</td>
                    <td>{employee.wedIn}</td>
                    <td>{employee.wedOut}</td>
                    <td>{employee.thuIn}</td>
                    <td>{employee.thuOut}</td>
                    <td>{employee.friIn}</td>
                    <td>{employee.friOut}</td>
                    <td>{employee.satIn}</td>
                    <td>{employee.satOut}</td>
                    <td>{employee.sunIn}</td>
                    <td>{employee.sunOut}</td>
                    <td>{employee.totalOvertime}</td>
                    <td>{employee.totalHours}</td>
                  </tr>
                )
              })}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Component;
