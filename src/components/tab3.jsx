import { useRef, useState } from "react";
import SigntureCanvas from "react-signature-canvas";
import '../styles/tab3.css';

const Tab3 = (props) => {
    const {formData} = props;
  const signatureRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const clearCanvas = () => {
    signatureRef.current.clear();
    setIsSubmitted(false);
  }
  const saveCanvas = () => {
    setIsSubmitted(true);
    if (!signatureRef.current.isEmpty()) {
        (async () => {
            const url = 'http://localhost:3000/';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...formData, image: signatureRef.current.toDataURL()})
            }
            const response = await fetch(url, options);
        })();
    }
  }
  return (
    <div>
      <SigntureCanvas
        penColor="green"
        backgroundColor="rgb(246, 241, 241)"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        ref={signatureRef}
        onBegin = {() => setIsSubmitted(false)}
      />
      <br/>
      {isSubmitted && signatureRef.current.isEmpty() && <p className="err-message">*Canvas is empty. Please give signature.</p>}
      <button type="button" onClick={clearCanvas}>Clear</button>
      <button type="button" onClick={saveCanvas}>Submit</button>
    </div>
  );
};

export default Tab3;
