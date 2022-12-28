import {Bounce, TextTitleAnimate} from "../styles/AnimatePage"
import {useTranslation} from 'react-i18next';
import { SlideStyle } from "../styles/Sharing";

const WelcomeSlide = () => {

    const { i18n } = useTranslation(); // multi language

    return (
      <SlideStyle style={{cursor:"pointer"}}>
          <TextTitleAnimate duration={1}>
            <h1><em>{i18n.t("home.title")} 👋</em></h1>
          </TextTitleAnimate>
          <Bounce>
            <a href="#home-lang" style={{color:"black"}}>
              <h5>{i18n.t("home.click")}</h5>
              <i className="fa-solid fa-angles-down"></i>
            </a>
          </Bounce>
        </SlideStyle>
    )
}

export default WelcomeSlide