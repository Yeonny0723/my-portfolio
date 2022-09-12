import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';


window.isActive = {'en':false, 'kr':false, 'vn':false};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);
