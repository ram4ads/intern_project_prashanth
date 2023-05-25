import { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormRegistration from "./components/formRegistration";
import ApplicationDetails from "./components/applicationDetails";

const FormContext = createContext(null);

const App = () => {
  const [formData, setFormData] = useState({});
  const [currentTab, setCurrentTab] = useState(0);

  const handleNextTab = () => {
    setCurrentTab(currentTab + 1);
  };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <FormRegistration />,
    },
    {
      path: "/appDetails",
      element: <ApplicationDetails />,
    },
  ]);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        currentTab,
        setCurrentTab,
        handleNextTab,
      }}
    >
      <RouterProvider router={route} />
    </FormContext.Provider>
  );
};

export { FormContext };
export default App;
