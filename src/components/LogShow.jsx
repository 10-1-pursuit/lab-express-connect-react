import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function LogShow() {
    const [log, setLog] = useState(null)

    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const fetchLog = async () => {
            try {
                const res = await fetch('http://localhost:4040/logs/' + id)
                const log = await res.json()
                setLog(log)
              } catch(err) {
                console.log(err)
              }
            }
        fetchLog()
    }, [id])

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
        </div>
            )}
            </div>
    )
}