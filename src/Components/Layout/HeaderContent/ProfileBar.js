import heb from './/yo.jpg'

const ProfileBar = () => {
    return (
        <div className="inline">
            <div style={{ lineHeight: '70px', paddingLeft:'60%' }}>
                Reclutador:
            </div>
            <div style={{ }}>
            <img src={heb} alt="BigCo Inc. logo" style={{ width: '75px', height:'75px', borderRadius:'30px' }} />

            </div>
        </div>
    );
}

export default ProfileBar;

//This component is the floating menu that is wrapped in the profile photo.