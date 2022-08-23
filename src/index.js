import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';


// click button styling
export const toggleClass = (isActive, setActive, lang) => {
    if (isActive[lang] === true){
      setActive({...isActive, [lang]:false})
    } else {
      setActive({...{'en':false, 'kr':false, 'vn':false}, [lang]:true})
    }
  };


// multi language
export const changeLanguage = (isActive, setActive, lang, i18n) => {
  i18n.changeLanguage(lang);
  toggleClass(isActive, setActive, lang);
}  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);
