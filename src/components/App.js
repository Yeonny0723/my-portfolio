import Welcome from "./Welcome"
import Language from "./Language"

function App() {
  return (
    <div className="container">
    <div className="row">
      <Language cls={"highlight-white"}/> 
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
