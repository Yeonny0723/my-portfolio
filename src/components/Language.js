import {useState} from "react";
import {useTranslation} from 'react-i18next';

const Language = ({cls}) => {
    // cls: a class name to highlight button on onclick event

    const [isActive, setActive] = useState(window.isActive); 
    // click button styling
    const toggleClass = (lang) => {
      if (isActive[lang] === false){
        setActive({...{'en':false, 'kr':false, 'vn':false}, [lang]:true});
        window.isActive = isActive;
      }
    };

    // multi language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      toggleClass(lang);
    }  

    return (
      <nav className="lang" style={{height: 'fit-content'}}>
        <button onClick={()=>changeLanguage('en')} className={window.isActive['en'] ? cls: null}>English</button>
        <span>|</span>
        <button onClick={()=>changeLanguage('kr')} className={window.isActive['kr'] ? cls: null} >한국어</button>
        <span>|</span>
        <button onClick={()=>changeLanguage('vn')} className={window.isActive['vn'] ? cls: null} >Tiếng Việt</button>
      </nav>
    )
}

export default Language