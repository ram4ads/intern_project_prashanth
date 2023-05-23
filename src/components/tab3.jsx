import { useRef } from "react";

const Tab3 = (props) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { formData, setFormData } = props.details;
  const { photoDataUrl } = formData;

  const openCamera = async () => {
    try {
      videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({
        video: true,
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
    setFormData({ ...formData, photoDataUrl });
  };

  const anotherPhoto = () => {
    setFormData({ ...formData, photoDataUrl: null });
  };

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
          <video ref={videoRef} autoPlay></video>
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
