const Tab2 = (props) => {
    const {handleNextTab} = props;
    return <div>
        <button type="button" onClick={handleNextTab}>Next</button>
    </div>
}

export default Tab2;