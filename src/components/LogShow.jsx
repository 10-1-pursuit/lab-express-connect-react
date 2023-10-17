import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function LogShow() {
    const [log, setLog] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const fetchLog = async () => {
            try {
                const res = await fetch(`http://localhost:4040/logs/${id}`);
                const log = await res.json();
                setLog(log);
              } catch(err) {
                console.log(err);
              }
            };
        fetchLog();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4040/logs/${id}`, { method: 'DELETE' });
            if (response.ok) {
                navigate('/logs');
            } else {
                console.error('Log deletion failed:', response.status);
            }
        } catch (err) {
            console.error('Error while deleting log:', err);
        }
    };

    return (
        <div>
            {log && (
                <div>
            <h2>Log {id}</h2>
            <h3>{log.title}</h3>
            <p>{log.post}</p>
                <p>Captain: {log.captainName}</p>
                <p>Mistakes: {log.mistakesWereMadeToday ? 'Yes' : 'No'}</p>          
                <p>Days Since Incident: {log.daysSinceLastCrisis}</p>
                <button onClick={() => navigate('/logs')}>Back</button>
                <button onClick={handleDelete}>Delete</button>
        </div>
            )}
            </div>
    );
}