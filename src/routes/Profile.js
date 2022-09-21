import Base from "../components/Base"
import Terminal from "../components/Terminal"
import History from "../components/History"
import SelfIntro from "../components/SelfIntro"
import Typewriter from 'typewriter-effect'
import { useEffect, useState } from "react"
import { BounceUp } from "../components/AnimatePage";

const Profile = () => {
    // Slide 
    const slideStyle = {
        display:"flex", 
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        height:"100%",
        overflow:"scroll", 
        scrollBehavior:"smooth"
    }

    // hide message
    const [showElement, setShowElement] = useState(true);
    useEffect(()=>{
        setTimeout(function(){
            setShowElement(false)
            }, 0);
    },[])

    const typeConst = ['be a changemaker', 'solve a big world problem']
    const content = (
        <div className="window-container" style={{height:"100%", overflow:"scroll"}}>
            {showElement?
            <div className="profileMessage fadeUp" style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h2 style={{margin:"0", marginBottom:"5vh"}}><em>This is Juyeon</em> 👩‍💻</h2>
                <div style={{display:"flex"}}>
                    <h3 style={{margin:"0"}}><em>who wants to&nbsp;</em></h3>
                    <Typewriter
                        onInit={(typewriter)=>{
                            typewriter.pauseFor(500)
                            .typeString(`${typeConst[0]}`).start()
                            .pauseFor(100)
                            .deleteAll()
                            .typeString(`${typeConst[1]}`).start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div> : null
            }
            {showElement?
            null:
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",
            width: "100%", height:"100%"}}>
                    <div style={{...{slideStyle}, width:"45%", fontSize:"0.9rem",
            overflow: "scroll"}}>
                        <SelfIntro/>
                    </div>
                    <div style={{...{slideStyle},width:"50%", fontSize:"0.8rem",
            overflow: "scroll"}}>
                    <p style={{display:"flex"}}>
                    Press &nbsp;
                    <em style={{color:"#F08C6F"}}>
                        <BounceUp>
                        "Click to run"&nbsp;
                        </BounceUp>
                    </em> 
                    &nbsp;button below to find me out more ↓
                    </p>
                        <Terminal/> 
                    </div>
                </div>
            }
            <History/>
        </div>
        // Copyright (c) 2022 by Yeonny Kim (https://codepen.io/yeonny0723/pen/wvjeVdm)
        // Fork of an original work CSS Typing Effect (https://codepen.io/denic/pen/GRoOxbM
        
        // Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        // The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    )

    return (
        <Base content={content} /> 
    );
}
export default Profile;
