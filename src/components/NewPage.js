import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


 function NewPage() {
  
///we want to manipulate so i need the use state: I need 
// the captainName and setCaptainName 
const [captainName, setCaptainName] = useState("");
      // variable   // seter function  // inital value
const [title, setTitle] = useState("");
const [post, setPost] = useState("");
///consider as true or false because it is a checkbox. Only two options.
//check or uncheck for the checkbox. We always start with false.
const [mistakes, setMistakes] = useState(false);
const [days, setDays] = useState(0);
const API = process.env.REACT_APP_API;
const navigate = useNavigate();



async function submitButton(e) {
 e.preventDefault();
 /// prevents refreshing of the page when using submit.

 /// try gets the data. Catch the error.
 try{      // shows us the index route (`${API}/logs`
           
   let result = await axios.post(`${API}/logs`,{
    // below is what we are creating which holds the value
    // first from the label
    // second from useState Variable
    captainName: captainName, 
    title: title,
    post: post,
    mistakesWereMadeToday: mistakes,
    daysSinceLastCrisis: days,
   })
   //once you submit it will bring you back to the logs page 
   navigate("/logs");
   // if you make a mistake it will catch the error
 } catch(error){
  console.log(error);
 }
}

  return (
    <div>
      <form onSubmit={submitButton}>
        {/* always need the onSubmit={submitButton} on the form because we are
        submitting the form */}
        {/* always need the onChange because the information will change with the next user */}
        <div>
       <label for="capname">captainName</label>      
      <input type="text" id="capname" name="capname" value={captainName} onChange={(e) => setCaptainName(e.target.value)}/>
      {/* the value is from the useState variable. Have to set that value in the setter function */}
      </div>
       <div>
       <label for="title">title</label> 
       <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
       </div>
       <div>
       <label for="post">post</label>
       <input type="text" id="post" name="post" value={post} onChange={(e) => setPost(e.target.value)}/>
       </div>
       <div>
       <label for="mistakes">mistakesWereMadeToday</label>
       <input type="checkbox" id="mistakes" name="mistakes" checked={mistakes} 
       onChange={(e)=> setMistakes(e.target.checked)}/>
      </div>
       <div>
       <label for="days">daysSinceLastCrisis</label>
       <input type="number" id="days" name="days" value={days} onChange={(e) => setDays(e.target.value)}/>
       </div>
       <div>
       <button>submit</button>
       </div>
  </form>



    </div>
  )
}


export default NewPage;