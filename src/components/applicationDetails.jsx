import { useContext, useState, useEffect } from "react";
import { FormContext } from "../App";
import "../styles/ApplicationDetails.css";

const ApplicationDetails = () => {
  const [appData, setAppData] = useState();
  const { formData } = useContext(FormContext);
  const { id } = formData;

  useEffect(() => {
    (async () => {
      const url = "http://localhost:3000/appDetails";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setAppData(data.document);
    })();
  }, []);

  const renderCard = () => {
    const {
      formValues,
      image,
      uploadImage,
      photoDataUrl,
    } = appData;
    const {firstName,
        lastName,
        dateOfBirth,
        email,
        phone,} = formValues;
    return (
      <div>
        <h2>Your Application Details</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Date Of Birth: {dateOfBirth}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>
          Uploaded Image: <br />
          <img src={uploadImage} height={100} />
        </p>
        <p>
          Photo: <br />
          <img src={photoDataUrl} height={100}/>
        </p>
        <p>
          Signature: <br />
          <img src={image} height={100}/>
        </p>
      </div>
    );
  };

  return <div>{appData && renderCard()}</div>;
};

export default ApplicationDetails;
