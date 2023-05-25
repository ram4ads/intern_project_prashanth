import { useRef, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SigntureCanvas from "react-signature-canvas";
import { FormContext } from "../App";
import "../styles/tab3.css";

const Tab5 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const signatureRef = useRef();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const clearCanvas = () => {
    signatureRef.current.clear();
    setIsSubmitted(false);
  };

  const saveCanvas = () => {
    setIsSubmitted(true);
    if (!signatureRef.current.isEmpty()) {
      (async () => {
        const url = "http://localhost:3000/";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            image: signatureRef.current.toDataURL(),
          }),
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setFormData(data);
        navigate('/appDetails');
      })();
    }
  };

  return (
    <div>
      <SigntureCanvas
        penColor="green"
        backgroundColor="rgb(246, 241, 241)"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        ref={signatureRef}
        onBegin={() => setIsSubmitted(false)}
      />
      <br />
      {isSubmitted && signatureRef.current.isEmpty() && (
        <p className="err-message">*Canvas is empty. Please give signature.</p>
      )}
      <button type="button" onClick={clearCanvas}>
        Clear
      </button>
      <button type="button" onClick={saveCanvas}>
        Submit
      </button>
    </div>
  );
};

export default Tab5;
