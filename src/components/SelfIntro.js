import { BounceUp } from "./AnimatePage";

const SelfIntro = () => {
    return (

        <div className="fadeUp">
            <div className="about-juyeon">
                <em><h3 style={{margin:"0"}}>About <em className="highlight-pink">Juyeon</em></h3></em>
                <div className="underline" style={{marginBottom: '1vh'}}></div>
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Hi there 👋 This is Juyeon, a fresh graduate from RMIT University. <br></br>
                I have a strong passion for backend development and Data engineering, but above all, I enjoy all the creation with new technology! 
                Feel free to reach out to me if you want to find me out more 😎<br></br>
                </p>
                <p style={{display:"flex"}}>
                Press &nbsp;
                <em style={{color:"#F08C6F"}}>
                    <BounceUp>
                    "Click to run"
                    </BounceUp>
                </em> 
                &nbsp;button below to find me out more ↓
                </p>
            </div>
            <div className="history">
            </div>
        </div>
    )
}

export default SelfIntro