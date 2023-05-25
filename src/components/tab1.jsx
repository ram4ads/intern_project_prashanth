import { FormContext } from "../App";
import { useRef, useContext } from "react";

const Tab1 = () => {
  const {formData, setFormData, handleNextTab} = useContext(FormContext);
  const formRef = useRef(null);

  const onSubmitForm = (event) => {
    event.preventDefault();
    const formElements = formRef.current.elements;
    const formValues = {};

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if(element.id) {
        formValues[element.id] = element.value;
      }
    }

    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords did not match")
    } else {
      setFormData({...formData, formValues});
      handleNextTab();
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input type="text" id="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input type="text" id="lastName" required />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <br />
          <input
            type="date"
            id="dateOfBirth"
            min="1923-05-15"
            max="2023-05-15"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address with @ and dot(.)"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="tel"
            id="phone"
            pattern="[0-9]{10}"
            title="Please enter a valid phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <br/>
          <textarea rows={4} name="address" id="address" required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            minLength="6"
            id="password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            minLength="6"
            id="confirmPassword"
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Tab1;
