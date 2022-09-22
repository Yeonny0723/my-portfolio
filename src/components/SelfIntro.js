import { BounceUp } from "./AnimatePage";

const SelfIntro = () => {
    return (
            <div className="fadeUp">
                <div className="about-juyeon">
                    <em><h3 style={{margin:"0"}}>About <em className="highlight-pink">Juyeon</em></h3></em>
                    <div className="underline" style={{marginBottom: '1vh'}}></div>
                    <p>
                    Hi there 👋 This is Juyeon who...
                    <ul>
                    <li>wants to <strong>leave a mark</strong> on the world and focus on the <strong>'value'</strong> which I can bring to the world</li>
                    <li><strong>constantly learn and study</strong> to be a better me than yesterday</li>
                    <li>is ready to work in a team to resolve a <strong>big world problem</strong></li>
                    <li>is <strong>a fast learner</strong> and can work at <strong>a very fast pace</strong></li>
                    <li>can be grateful for what I have and value every single relationship</li>
                    </ul>
                    </p>
                </div>
                <div style={{display:"flex"}}>
                <div className="custom-btn" style={{marginRight: "2vw"}}>
                    {/* <a href="/files/new_resume.docx" download> */}
                        <p>
                            <i class="fa-regular fa-file fa-lg"></i>&nbsp;Resume (.eng)
                        </p>
                    {/* </a> */}
                </div>
                <div className="custom-btn">
                    {/* <a href="/files/new_resume.docx" download> */}
                        <p>
                            <i class="fa-regular fa-file fa-lg"></i>&nbsp;Resume (.kr)
                        </p>
                    {/* </a> */}
                </div>
                </div>
            </div>
    )
}

export default SelfIntro