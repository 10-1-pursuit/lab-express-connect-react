import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function EditLogEntry() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [logData, setLogData] = useState({captainName: '', title: '', post: '', mistakesWereMadeToday: false, daysSinceLastCrisis: 0});

    const handleTextChange = (e) => {
        setLogData({ ...logData, [e.target.id]: e.target.value});
    };

    const handleCheckboxChange = () => {
        setLogData({ ...logData, mistakesWereMadeToday: !logData.mistakesWereMadeToday })
    }

    const updateLogEntry = async () => {
        try {
            const response = await fetch(`http://localhost:4040/logs/${id}`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(logData)})

            if (response.ok) {
                navigate(`/logs/${id}`);
            } else {
                console.error('Log entry update failed:', response.status);
            }
        } catch (error) {
            console.error('Error while updating log entry:', error);
        }
    };

    useEffect(() => {
        const fetchLogData = async () => {
            try {
                const response = await fetch(`http://localhost:4040/logs/${id}`);
                if (response.ok) {
                    const log = await response.json();
                    setLogData(log);
                } else {
                    console.error('Failed to fetch log data:', response.status);
                }
                } catch (error) {
                    console.error('Error while fetching log data:', error);
                }
            };
            fetchLogData();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault(e);
        updateLogEntry();
    };

    return (
        <div className="EditLogEntry">
            <h2> Edit </h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name:</label>
                <input id="captainName" value={logData.captainName} type="text" onChange={handleTextChange} placeholder="Captain's Name" required />
                <br />
                <label htmlFor="title">Title:</label>
                <input id="title" value={logData.title} type="text" onChange={handleTextChange} placeholder="Title" required />
                <br />
                <label htmlFor="post">Post:</label>
                <input id="post" value={logData.post} type="text" onChange={handleTextChange} placeholder="Post" required />
                <br />
                <label htmlFor="mistakesWereMadeToday">Mistakes made today:</label>
                <input id="mistakesWereMadeToday" type="checkbox" onChange={handleCheckboxChange} checked={logData.mistakesWereMadeToday} />
                <br />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <input id="daysSinceLastCrisis" value={logData.daysSinceLastCrisis} type='number' onChange={handleTextChange} required />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to="/logs"><button>Nevermind!</button></Link>
        </div>
    );
    }

    export default EditLogEntry;