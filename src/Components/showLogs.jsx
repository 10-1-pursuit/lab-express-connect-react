

function show({ log , index}) {


    return (

        <div key={index} className="container show">
            <h1>{log.title}</h1>
            <h3>{log.captainName}</h3>
            <section>
                <p>{log.post}</p>
            </section>
            <h4>{log.mistakesWereMadeToday}</h4>
            <h5>{log.daysSinceLastCrisis}</h5>
        </div>

    )



}