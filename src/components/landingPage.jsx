import { Link } from "react-router-dom";


function LandingPage(){
    return(
        <>
        <Link to='/login'>
        <button>
            login
        </button>
        </Link>
        <Link to='/signup'>
        <button>
            signup
        </button>
        </Link>
        </>
    )
}

export default LandingPage