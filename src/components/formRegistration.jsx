import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FormContext } from "../App";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import Tab5 from "./tab5";
import "react-tabs/style/react-tabs.css";

const FormRegistration = () => {
  const { currentTab, setCurrentTab } =
    useContext(FormContext);

  return (
    <div className="app-card">
      <div>
        <img />
        <h1>User Registration</h1>
      </div>
      <Tabs
        selectedIndex={currentTab}
        onSelect={(index) => setCurrentTab(index)}
      >
        <TabList>
          <Tab>User details</Tab>
          <Tab>Upload Image</Tab>
          <Tab>Take Photo</Tab>
          <Tab>Captcha</Tab>
          <Tab>Signature & Submit</Tab>
        </TabList>
        <TabPanel className="tab-panel">
          <Tab1/>
        </TabPanel>
        <TabPanel className="tab-panel">
          <Tab2/>
        </TabPanel>
        <TabPanel>
          <Tab3/>
        </TabPanel>
        <TabPanel>
          <Tab4/>
        </TabPanel>
        <TabPanel>
          <Tab5/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default FormRegistration;
