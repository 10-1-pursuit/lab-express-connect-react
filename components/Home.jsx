import React, { useEffect, useState } from 'react';

const Home = () => {
    const [apiMessage, setApiMessage] = useState('');

    useEffect(() => {
        // Make a GET request to the root directory of the API
        fetch(process.env.REACT_APP_API_URL)
            .then((response) => response.text())
            .then((data) => setApiMessage(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>API Root Message:</h1>
            <p>{apiMessage}</p>
        </div>
    );
};

export default Home;