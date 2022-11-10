import Language from "./Language"
import {NavLink} from 'react-router-dom';
import {LeftSlide, RightSlide, UpSlide, Bounce} from "./AnimatePage";
import ScreenWarning from "../components/Warning";

const Base = ({content}) => {
  return (
    <div className="container">
      <ScreenWarning id={"rotate-warning"}/>
    <div id="screen-inactive"></div>
    <div className="row">
      <Language cls={"highlight-white"}/> 
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
        <NavLink className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/"><i className="fa-solid fa-house" /></NavLink>
        <NavLink className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/profile"><i className="fa-solid fa-user" /></NavLink>
        <NavLink className={(navData)=> navData.isActive ? "highlight-pink" : null }to="/portfolio"><i className="fa-solid fa-folder" /></NavLink>
      </div>
    </div>
    {window.location.pathname === '/my-portfolio/' ? 
      <UpSlide>
        <div id="window" className="shadow">
          {content}
        </div>
      </UpSlide> : <>
      {window.location.pathname === '/my-portfolio/profile' ?
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
    <div className="row" style={{alignItems: "flex-start"}}>
      <div className="sns" style={{paddingTop:"1.5vh"}}>
        <a target="_blank" href="https://github.com/Yeonny0723"><i className="fa-brands fa-github fa-2xl" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/juyeon-kim-6a227a207/"><i className="fab fa-linkedin-in fa-2xl"></i></a>
        <a target="_blank" href="mailto:kkjuyeon@gmail.com"><i className="fa-solid fa-envelope fa-2xl" /></a>
        <a data-use="spacing"></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCNKzJr3lPwz13sCzrDCuc1A"><i class="fa-brands fa-youtube fa-2xl"></i></a>
        <a target="_blank" href="https://velog.io/@kkjuyeon"><i class="fa-brands fa-blogger fa-2xl"></i></a>
      </div>

      {window.location.pathname.includes("/portfolio") ? 
          <div className="btn shadow" style={{borderRadius: '5vh'}}>
          <NavLink to="/profile"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
          <NavLink to="/"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
        </div>
      : <>
      {window.location.pathname.includes("/profile") ? 
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
      <NavLink to="/"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
      <NavLink to="/portfolio"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
    </div> :
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
      <NavLink to="/portfolio"><i className="fa-solid fa-caret-left fa-2xl" /></NavLink>
      <NavLink to="/profile"><i className="fa-solid fa-caret-right fa-2xl" /></NavLink> 
    </div> 
      }
      </>
    }


    
    </div>
  </div>
  );
}

export default Base;
