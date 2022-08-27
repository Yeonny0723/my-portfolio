import Language from "./Language"
import {NavLink} from 'react-router-dom';
import {LeftSlide, RightSlide, UpSlide} from "./AnimatePage";

const Base = ({content}) => {
  return (
    <div className="container">
    <div className="row">
      <Language cls={"highlight-white"}/> 
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
        <NavLink  className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/"><i className="fa-solid fa-house" /></NavLink>
        <NavLink  className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/profile"><i className="fa-solid fa-user" /></NavLink>
        <NavLink  className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/portfolio"><i className="fa-solid fa-folder" /></NavLink>
      </div>
    </div>
    {window.location.pathname === '/' ? 
      <UpSlide>
        <div id="window" className="shadow" style={{height:"76vh"}}>
          {content}
        </div>
      </UpSlide> : <>
      {window.location.pathname === '/profile' ?
      <LeftSlide>
        <div id="window" className="shadow" style={{height:"76vh"}}>
          {content}
        </div>
      </LeftSlide> :
      <RightSlide>
        <div id="window" className="shadow" style={{height:"76vh"}}>
          {content}
        </div>
      </RightSlide>
      }
      </>
  }
    <div className="row">
      <div className="sns" style={{height: '60%'}}>
        <a href="#"><i className="fa-brands fa-github fa-2xl" /></a>
        <a href="#"><i className="fa-brands fa-instagram fa-2xl" /></a>
        <a href="#"><i className="fa-solid fa-envelope fa-2xl" /></a>
      </div>
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
        <a href="#"><i className="fa-solid fa-caret-left fa-2xl" /></a>
        <a href="#"><i className="fa-solid fa-caret-right fa-2xl" /></a>
      </div>
    </div>
  </div>
  );
}

export default Base;
