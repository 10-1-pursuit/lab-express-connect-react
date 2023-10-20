import { Link } from "react-router-dom"


const NavBar = () => {

    return (
        <>
        <div className="Nav">
           
            <Link to={'/logs'} >
                🏴‍☠️All Captains
            </Link> 
            <Link to={'/logs/new'} >
                1️⃣ New Log
            </Link> <br/>
            {/* <Link to={'/'} >
                Home
            </Link> */}
            </div>
     <div className="app" style={{fontSize: '137px', fontFamily: 'Fantasy', color: 'Teal'}}> <b><em>Hello World</em></b></div>
     </>
    )
}

export default NavBar