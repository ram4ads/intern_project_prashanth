import { useRef, useState, useContext } from "react";
import { FormContext } from "../App";

const Tab3 = () => {
  const [res, setRes] = useState(100);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { formData, setFormData } = useContext(FormContext);
  const { photoDataUrl } = formData;

  const openCamera = async (reso=100) => {
    try {
      console.log(reso);
      videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({
        video: {
          width: {ideal: Math.round((reso * 0.01) * 320)},
          height: {ideal: Math.round((reso * 0.01) * 240)}
        },
        audio: false,
      });
    } catch (error) {
      console.error("Error accessing camera: ", error);
    }
  };

  const closeCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photoDataUrl = canvas.toDataURL("image/jpeg");
    console.log(photoDataUrl.length);
    setFormData({ ...formData, photoDataUrl });
  };

  const anotherPhoto = () => {
    setFormData({ ...formData, photoDataUrl: null });
    setRes(100);
  };

  const changeRes = event => {
    if (videoRef.current.srcObject) {
      const newRes = event.target.value;
      setRes(newRes);
      openCamera(newRes);
    }
  }

  return (
    <div>
      {!photoDataUrl && (
        <div>
          <button type="button" onClick={openCamera}>
            Open Camera
          </button>
          <button type="button" onClick={closeCamera}>
            Close Camera
          </button>
          <button type="button" onClick={capturePhoto}>
            Capture Photo
          </button>
          <br/>
          <video ref={videoRef} autoPlay></video>
          <br/>
          <input type="range" min={0} max={100} value={res} onChange={changeRes}/>
        </div>
      )}
      {photoDataUrl && (
        <div>
          <button type="button" onClick={anotherPhoto}>
            Take another photo
          </button>
          <img src={photoDataUrl} alt="recent photo" />
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
};

export default Tab3;
