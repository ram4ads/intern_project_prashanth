const Tab2 = (props) => {
    const {handleNextTab, formData, setFormData} = props.details;
    const {uploadImage} = formData;

    const handleUpload = (event) => {
        const file = event.target.files[0];
        setFormData({...formData, uploadImage: URL.createObjectURL(file)});
    }
    return <div>
        <input type="file" onChange={handleUpload}/>
        {uploadImage && <img src={uploadImage}/>}
        <button type="button" onClick={handleNextTab}>Next</button>
    </div>
}

export default Tab2;