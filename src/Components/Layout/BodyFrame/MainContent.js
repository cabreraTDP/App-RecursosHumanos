const MainContent = () => {
    return (
        <div className="inline">
            <div style={{}}>
            <h1 style={{color:'aqua',float:'left'}}>Candidatos en proceso</h1>
        
            <input type="text" placeholder="ingrese un parametro de busqueda" style={{
                width:'30%',
                height:'5%',
                marginTop:'30px'
            }}/>
            </div>
        </div>
    );
}

export default MainContent;

//This component wraps the main content to the right of the SideBar this commonly means the Table with the candidate/roles info
