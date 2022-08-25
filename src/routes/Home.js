import Base from "../components/Base"
import Welcome from "../components/Welcome"

const Home = () => {
    const content = <Welcome style={{width: '100%', height: '100%'}}/>
    return (
    <Base content={content}/> 
    );
}
export default Home;
