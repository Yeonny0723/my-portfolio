import { BounceUp } from "./AnimatePage";

const SelfIntro = () => {
    return (
            <div className="fadeUp">
                <div className="about-juyeon">
                    <em><h3 style={{margin:"0"}}>About <em className="highlight-pink">Juyeon</em></h3></em>
                    <div className="underline" style={{marginBottom: '1vh'}}></div>
                    <p>
                    <br></br>
                    Hi there 👋 This is Juyeon, a fresh graduate who...
                    <ul>
                    <li>have a strong passion for <strong>backend development / Data engineering </strong>but enjoy all creation with new technology 😎</li>
                    <li>is very <strong>goal-oriented</strong> and has a strong <strong>growth needs</strong></li>
                    <li><strong>constantly learn and study</strong> to be a better me in an open manner</li>
                    <li>is <strong>a fast learner</strong> and can work at <strong>a very fast pace</strong></li>
                    <li>wants to <strong>leave a mark</strong> on the world and focus on the <strong>'value'</strong> which I can bring to the world</li>
                    <li>is ready to work in a team to resolve a <strong>big world problem</strong></li>
                    <li>can be grateful for what I have and value every single relationship</li>
                    </ul>
                <br></br>
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