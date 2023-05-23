import { useEffect, useRef } from 'react';
import {loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';

const Tab4 = () => {
    const inputRef = useRef(null);
    useEffect(() => loadCaptchaEnginge(6),[]);

    const doSubmit = () => {
        if (validateCaptcha(inputRef.current.value)) {
            alert('Captcha matched');
            loadCaptchaEnginge(6);
        } else {
            alert('Captcha did not match');
        }
        inputRef.current.value = "";
    }

    return <div>
        <LoadCanvasTemplate/>
        <input ref={inputRef} placeholder='Enter Captcha value' type='text'/>
        <button type='button' onClick={doSubmit}>submit</button>
    </div>
}

export default Tab4;