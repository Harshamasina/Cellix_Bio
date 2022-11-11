import { NavLink} from "react-router-dom";

function Logo(){
    return(
        <div className="logo">
            <NavLink to="/Home">
            <img className="logo" src="https://www.cellixbio.com/images/logo-dark.png" alt="Logo"></img></NavLink>
        </div>
    )
}

export default Logo;