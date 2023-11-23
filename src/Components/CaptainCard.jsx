import React from 'react';
import  { useEffect, useState } from 'react';
 import { useParams } from 'react-router-dom';




const CaptainCard=()=>{



    const [logs, setLogs] = useState([]);
    const {index}=useParams()



    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:9000/logs/`);
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



return(<>


        <h1>Show</h1>
            {logs.map((log,indexx)=>{
                if(index== indexx ){

           

                    return (<div key={index} id={index}>

                        <h1>{`${log.title} by ${log.captainName}`}</h1>
                        <h2>{log.post}</h2>
                        <h3>{`Days Since Last Crisis: ${log.daysSinceLastCrisis}`}</h3>








                    </div>
                    
                    )
                
                }
                
        
             
             








            })}
            {/* <button>Back </button>
            <button>Edit</button>
            <button>Delete</button> */}
       

        


</>);

        
}


export default CaptainCard