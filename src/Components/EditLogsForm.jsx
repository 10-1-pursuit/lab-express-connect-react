import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function EditLogsForm() {
    let { index } = useParams();
    const navigate = useNavigate();

    const [editLog, setEditLog] = useState({})
    const [option, setOption] = useState("");
    const [value, setValue] = useState("")

    const EditLog = () => {

        const API = process.env.REACT_APP_API_URL;

        fetch(`${API}/logs`, {
            method: "PUT",
            body: JSON.stringify(editLog),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate(`/logs/${index}`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleOption = (event) => {
        setOption(event.target.value)
    }
    const handleValue = (event) => {
        if (option === "daysSinceLastCrisis"){
            setValue(parseInt(event.target.value))
        } else {
            setValue(event.target.value)
        }
    
    };

    function handleEditSumbit(event) {
        event.preventDefault();
            setEditLog()
            EditLog();
       
    };


    return (
        <div className="Edit">
            <form onSubmit={handleEditSumbit}>
                <label htmlFor="option">Option:</label>
                <select
                    name="option"
                    onChange={handleOption}
                    value={option}
                >
                    <option value={"captainName"}>captainName</option>
                    <option value={"title"}>title</option>
                    <option value={"post"}> post</option>
                    <option value={"mistakesWereMadeToday"}>mistakesWereMadeToday</option>
                    <option value={"daysSinceLastCrisis"}> daysSinceLastCrisis</option>
                </select>

                <label htmlFor="value">Changes:</label>
                <input
                    id="value"
                    type="text"
                    onChange={handleValue}
                    placeholder="Make edits here"
                    required
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/logs`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );

}

export default EditLogsForm;


// let vaild =  (
//     (req.body.hasOwnProperty( "captainName") && typeof req.body.captainName === "string") || 
//     (req.body.hasOwnProperty( "title") && typeof req.body.title === "string")  || 
//     (req.body.hasOwnProperty( "post") && typeof req.body.post === "string") || 
//     (req.body.hasOwnProperty( "mistakesWereMadeToday") && typeof req.body.mistakesWereMadeToday === "boolean" ) || 
//     (req.body.hasOwnProperty( "daysSinceLastCrisis") && typeof req.body.daysSinceLastCrisis === "number"  )
//   );