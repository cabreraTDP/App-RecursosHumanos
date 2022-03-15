import BodyFrame from './BodyFrame/BodyFrame'
import HeaderContent from './HeaderContent/HeaderContent'
import '../../CSS/Layout.css'

const PlainBackground = () => {
    return (
        <div className="grid-container">
            <div  className="item-header">
                <HeaderContent/>
            </div>
            <div  className="item-menu ">
                <BodyFrame/>
            </div>

        </div>
    );
}

export default PlainBackground;