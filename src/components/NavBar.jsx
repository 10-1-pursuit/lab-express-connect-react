import { Link } from "react-router-dom"


const NavBar = () => {

    return (
        <>
        <div className="Nav">
           <h1> Captain's Log</h1>
           
            <Link to={'/logs'} >
                🏴‍☠️All Captains
            </Link> 
            <Link className="" to={'/logs/new'} >
                1️⃣ New Log
            </Link> <br/>
            {/* <Link to={'/'} >
                Home
            </Link> */}
            </div>
     </>
    )
}

export default NavBar