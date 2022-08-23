import {useState} from "react";
import Welcome from "./components/Welcome"
import { useTranslation } from 'react-i18next';
import {changeLanguage} from "./index"

function App() {

  // click button styling
  const [isActive, setActive] = useState({'en':true, 'kr':false, 'vn':false});
  // multi language
  const {t, i18n} = useTranslation();

  return (
    <div className="container">
    <div className="row">
      <nav className="lang" style={{height: 'fit-content'}}>
        <button onClick={()=>changeLanguage(isActive, setActive, "en", i18n)} className={isActive['en'] ? "highlight-white": null}>English</button>
        <span>|</span>
        <button onClick={()=>changeLanguage(isActive, setActive, "kr", i18n)} className={isActive['kr'] ? "highlight-white": null} >한국어</button>
        <span>|</span>
        <button onClick={()=>changeLanguage(isActive, setActive, "vn", i18n)} className={isActive['vn'] ? "highlight-white": null} >Tiếng Việt</button>
      </nav>
      <div className="btn shadow" style={{borderRadius: '5vh'}}>
        <a href="#"><i className="fa-solid fa-house" /></a>
        <a href="#"><i className="fa-solid fa-user" /></a>
        <a href="#"><i className="fa-solid fa-folder" /></a>
      </div>
    </div>
    <div className="window shadow">
      <Welcome style={{width: '100%', height: '100%'}}/>
    </div>
    <div className="row">
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

export default App;
