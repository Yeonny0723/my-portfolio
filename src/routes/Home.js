import Base from "../components/Base"
import Welcome from "../components/Welcome"

const Home = () => {
    const welcome = <Welcome />
    return (
    <Base content={welcome}/> 
    );
}
export default Home;
