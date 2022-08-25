import Language from "./Language"
import {NavLink} from 'react-router-dom';

const Base = ({content}) => {
  const activeStyle = {
    color: "#F08C6F"
  }
  return (
    <div className="container">
    <div className="row fadeUp">
      <Language cls={"highlight-white"}/> 
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
        <NavLink  className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/"><i className="fa-solid fa-house" /></NavLink>
        <NavLink  className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/profile"><i className="fa-solid fa-user" /></NavLink>
        <NavLink  className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/portfolio"><i className="fa-solid fa-folder" /></NavLink>
      </div>
    </div>
    <div className="window shadow">
      {content}
    </div>
    <div className="row fadeUp">
      <div className="sns" style={{height: '60%'}}>
        <a href="#"><i className="fa-brands fa-github fa-2xl" /></a>
        <a href="#"><i className="fa-brands fa-instagram fa-2xl" /></a>
        <a href="#"><i className="fa-solid fa-envelope fa-2xl" /></a>
      </div>
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
        <a href="#"><i className="fa-solid fa-caret-left" /></a>
        <a href="#"><i className="fa-solid fa-caret-right" /></a>
      </div>
    </div>
  </div>
  );
}

export default Base;
