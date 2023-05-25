import { useContext } from "react";
import { FormContext } from "../App";

const Tab2 = () => {
    const {handleNextTab, formData, setFormData} = useContext(FormContext);
    const {uploadImage} = formData;

    const handleUpload = (event) => {
        const file = event.target.files[0];
        setFormData({...formData, uploadImage: URL.createObjectURL(file)});
    }
    return <div>
        <input type="file" onChange={handleUpload}/>
        {uploadImage && <img src={uploadImage} height={100}/>}
        <button type="button" onClick={handleNextTab}>Next</button>
    </div>
}

export default Tab2;