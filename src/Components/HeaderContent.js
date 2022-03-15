import NavBar from "./NavBar"
import ProfileBar from "./ProfileBar"
import '../style/HeaderContent.css';

const HeaderContent = () => {
    return (
        <div id="menu">
            <NavBar/>
            <ProfileBar/>
        </div>
    );
}

export default HeaderContent;

//This component wraps the header of the app (navbar & profile access)