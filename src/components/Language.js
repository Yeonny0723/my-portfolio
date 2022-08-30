import {useState} from "react";
import {useTranslation} from 'react-i18next';

const Language = ({cls}) => {
    // cls: a class name to highlight button on onclick event

    const [isActive, setActive] = useState(window.isActive); 
    // click button styling
    const addClass = (lang) => {
      const renewed = {'en':false, 'kr':false, 'vn':false}
      renewed[lang] = true
      setActive(renewed);
      window.isActive = renewed;
    };

    // multi language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      addClass(lang);
    }  

    return (
      <nav className="lang" style={{height: 'fit-content'}}>
        <button onClick={()=>changeLanguage('en')} className={window.isActive['en'] ? cls: null}><span>English</span></button>
        <span>|</span>
        <button onClick={()=>changeLanguage('kr')} className={window.isActive['kr'] ? cls: null} ><span>한국어</span></button>
        <span>|</span>
        <button onClick={()=>changeLanguage('vn')} className={window.isActive['vn'] ? cls: null} ><span>Tiếng Việt</span></button>
      </nav>
    )
}

export default Language