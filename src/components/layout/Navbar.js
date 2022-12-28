import {NavLink} from 'react-router-dom';
import { TEXT_PINK } from '../styles/Variables';
import { LinkContainerStyle } from '../styles/Sharing';

const Navbar = () => {
    return (
      <LinkContainerStyle>
        <NavLink style={({ isActive }) => (isActive ? {color: TEXT_PINK} : {})} to="/"><i className="fa-solid fa-house" /></NavLink>
        <NavLink style={({ isActive }) => (isActive ? {color: TEXT_PINK} : {})} to="/profile"><i className="fa-solid fa-user" /></NavLink>
        <NavLink style={({ isActive }) => (isActive ? {color: TEXT_PINK} : {})} to="/portfolio"><i className="fa-solid fa-folder" /></NavLink>
      </LinkContainerStyle>
    )
}


export default Navbar;

