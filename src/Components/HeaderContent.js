import NavBar from "./NavBar"
import ProfileBar from "./ProfileBar"

const HeaderContent = () => {
    return (
        <div>
            <NavBar/>
            <ProfileBar/>
        </div>
    );
}

export default HeaderContent;

//This component wraps the header of the app (navbar & profile access)