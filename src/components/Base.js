import Language from "./Language"
import {NavLink} from 'react-router-dom';
import {LeftSlide, RightSlide, UpSlide} from "./AnimatePage";

const Base = ({content}) => {
  return (
    <div className="container">
    <div id="screen-inactive"></div>
    <div className="row">
      <Language cls={"highlight-white"}/> 
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
        <NavLink className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/"><i className="fa-solid fa-house" /></NavLink>
        <NavLink className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/profile"><i className="fa-solid fa-user" /></NavLink>
        <NavLink className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/portfolio"><i className="fa-solid fa-folder" /></NavLink>
      </div>
    </div>
    {window.location.pathname === '/' ? 
      <UpSlide>
        <div id="window" className="shadow">
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
        <a target="_blank" href="https://github.com/Yeonny0723"><i className="fa-brands fa-github fa-2xl" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/juyeon-kim-6a227a207/"><i className="fab fa-linkedin-in fa-2xl"></i></a>
        <a target="_blank" href="mailto:kkjuyeon@gmail.com"><i className="fa-solid fa-envelope fa-2xl" /></a>
      </div>

      {window.location.pathname === '/' ? 
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
      <NavLink to="/portfolio"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
      <NavLink to="/profile"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
    </div> : <>
      {window.location.pathname === '/profile' ?
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
      <NavLink to="/"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
      <NavLink to="/portfolio"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
    </div> :
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
      <NavLink to="/profile"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
      <NavLink to="/"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
    </div>
      }
      </>
    }


    
    </div>
  </div>
  );
}

export default Base;
