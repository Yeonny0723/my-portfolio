import { BounceUp } from "./AnimatePage";

const SelfIntro = () => {
    return (
        <div className="fadeUp">
            <div className="about-juyeon">
                <em><h1 style={{margin:"0"}}>About <span className="highlight-pink">Juyeon</span></h1></em>
                <div className="underline" style={{marginBottom: '20px'}}></div>
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Hi there 👋 This is Juyeon, a fresh graduate from RMIT University! <br></br>
                I have a strong passion for Web development and Data engineering, <br></br>
                but above all, I enjoy all the creation with new technology!<br></br>
                Feel free to reach out to me if you want to know me more ! <br></br>
                </p>
                <br></br>
                <p style={{display:"flex"}}>
                Press &nbsp;
                <em style={{color:"#F08C6F"}}>
                    <BounceUp>
                    "Click to run"
                    </BounceUp>
                </em> 
                &nbsp; button to find me out more!
                </p>
            </div>
            <div className="history">
            </div>
        </div>
    )
}

export default SelfIntro