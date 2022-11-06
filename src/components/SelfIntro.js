import {useTranslation} from 'react-i18next';

const SelfIntro = () => {
    // initialize const for translation
    const { t, i18n } = useTranslation();
    return (
            <div className="fadeUp">
                <div className="about-juyeon">
                    <em><h3 style={{margin:"0"}}>About <em className="highlight-pink">Juyeon</em></h3></em>
                    <div className="underline" style={{marginBottom: '1vh'}}></div>
                    <p>{i18n.t("profile.intro.0")}</p>
                    <ul>
                    <li><p>{i18n.t("profile.intro.1")}</p></li>
                    <li><p>{i18n.t("profile.intro.2")}</p></li>
                    <li><p>{i18n.t("profile.intro.3")}</p></li>
                    <li><p>{i18n.t("profile.intro.4")}</p></li>
                    </ul>
                </div>
                <div style={{display:"flex"}}>
                <div className="custom-btn" style={{marginRight: "2vw"}}>
                    {/* <a href="/files/new_resume.docx" download> */}
                        <p>
                            <i className="fa-regular fa-file fa-lg"></i>&nbsp;Resume (eng)
                        </p>
                    {/* </a> */}
                </div>
                <div className="custom-btn">
                    {/* <a href="/files/new_resume.docx" download> */}
                        <p>
                            <i className="fa-regular fa-file fa-lg"></i>&nbsp;이력서 (kr)
                        </p>
                    {/* </a> */}
                </div>
                </div>
            </div>
    )
}

export default SelfIntro