import { NavLink } from "react-router-dom";
import { LinkContainerStyle } from "../styles/Sharing";

const Pagination = () => {
    return (
        <LinkContainerStyle>
            {window.location.pathname.includes("/portfolio") 
            ?
                <> 
                    <NavLink to="/profile"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
                    <NavLink to="/"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
                </>
            : 
                <>
                {window.location.pathname.includes("/profile") ? 
                    <>
                    <NavLink to="/"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
                    <NavLink to="/portfolio"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
                    </>
                    :
                    <>
                    <NavLink to="/portfolio"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
                    <NavLink to="/profile"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
                    </>
                }
                </>
            }
        </LinkContainerStyle>
    )
}

export default Pagination;