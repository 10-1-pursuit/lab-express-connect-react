import React from 'react';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const ShowTitles=()=>{


    const [logs, setLogs] = useState([]);



useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:9000/logs');
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      setLogs(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  fetchData();
}, []);

return (
    <>
    <h1 id="label">Index</h1>
        {logs.map((log,index)=>{
            return( <React.Fragment>
               <></>
              <br></br>
                <table>
                <thead>
          <tr>
            <th >MISTAKES</th>
            <th>CAPTAINS NAME</th>
            <th>Log Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
            <th>Link to Log</th>
          
          </tr>
        </thead>
        <tbody>
                <tr>
                <td key={index} id={index}>{log.mistakesWereMadeToday ? "😑" :null}</td>
                <td key={index} id={index}>{log.captainName}</td>
                <td key={index} id={index}>{log.title}</td>
                <td key={index} id={index}>{<Link to={`/logs/${index}`}>Go to Log</Link>}</td>
                </tr>
                </tbody>
                </table>
                    </React.Fragment>
                    
                    
                    
                    )
          })}
            
          
            
        
       
          </>
        )}
   







export default ShowTitles

{/* <h1 id="label">Index</h1>
        {logs.map((log,index)=>{
            return( <React.Fragment>
              <></>
              <br></br>
             
                <table>
                <thead>
          <tr>
            <th>MISTAKES</th>
            <th>CAPTAINS NAME</th>
            <th>Log Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
            <th>Link to Log</th>
          
          </tr>
        </thead>
        <tbody>
                <tr>
                <td key={index} id={index}>{log.mistakesWereMadeToday ? "😑" :null}</td>
                <td key={index} id={index}>{log.captainName}</td>
                <td key={index} id={index}>{log.title}</td>
                <td key={index} id={index}>{<Link to={`/logs/${index}`}>Go to Log</Link>}</td>
                </tr>
                </tbody>
                </table>
                    </React.Fragment>
                    
                    
                    
                    )
          })} */}