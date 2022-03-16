import CandidatoInfo from './CandidatoInfo';
import VacanteInfo from './VacanteInfo';
import RateInfo from './RateInfo';


const SideBar = () => {
    return (
        <div className="" style={{ backgroundColor:'#d5d3e5', borderRadius: '30px'}}>
            <CandidatoInfo/>
            <VacanteInfo/>
            <RateInfo/>
        </div>
    );
}

export default SideBar;

//This component wraps the side bar that displays the specific info about the candidate/role∫