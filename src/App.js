import React, { useState, useEffect } from "react";
import axios from 'axios'
import Table from 'react-bootstrap/Table'


export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/')
    .then(res => {
      console.log(res)
      setItems(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h1>Corona Cases in different country</h1><br/>
            <Table striped bordered hover>
            <thead>
              <tr>
                  <th>#</th>
                  <th>Country Name</th>
                  <th>Country Code</th>
                  <th>Total Cases</th>
                  <th>Recovered Cases</th>
                  <th>Death Cases</th>
              </tr>
              </thead>
              <tbody>
                {items.map(item => (
                <tr key="item">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td>{item.total_cases}</td>
                    <td>{item.recovered_cases}</td>
                    <td>{item.death_cases}</td>
                </tr>
                ))}
              </tbody>
            </Table>
    </div>
  );
}
