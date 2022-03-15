import NavBar from "./NavBar"
import ProfileBar from "./ProfileBar"
import '../../../CSS/HeaderContent.css'

const HeaderContent = () => {
    return (
        <div className="header">
            <div className="header-navbar">
                <NavBar/>
            </div>
            <div className="header-profilebar">
                <ProfileBar/>
            </div>
        </div>
    );
}

export default HeaderContent;

//This component wraps the header of the app (navbar & profile access)