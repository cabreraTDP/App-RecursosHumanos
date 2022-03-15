import MainContent from "./MainContent"
import SideBar from "./SideBar"
import '../../../CSS/BodyFrame.css'

const BodyFrame = () => {
    return (
            <div className="content">
                <div className="content-sidebar">
                    <SideBar/>
                </div>
                <div className="content-maincontent">
                    <MainContent/>
                </div>
            </div>
    );
}

export default BodyFrame;

//This component corresponds to the section below the headerContent