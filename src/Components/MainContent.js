import CandidatoInfo from './CandidatoInfo'
import VacanteInfo from './VacanteInfo'
import RateInfo from './RateInfo'



const MainContent = () => {
    return (
        <div style={{paddingLeft:'50px', backgroundColor:'#d5d3e5', width:'250px', borderRadius: '30px', margin:'0'}}>
            <CandidatoInfo />
            <VacanteInfo />
            <RateInfo />
        </div>
    );
}

export default MainContent;

//This component wraps the main content to the right of the SideBar this commonly means the Table with the candidate/roles info
