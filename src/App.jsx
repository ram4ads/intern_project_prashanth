import { useState } from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Tab1 from './components/tab1';
import Tab2 from "./components/tab2";
import Tab3 from "./components/tab3";
import Tab4 from "./components/tab4";
import Tab5 from "./components/tab5";
import './App.css'

function App() {
  const [formData, setFormData] = useState({});
  const [currentTab, setCurrentTab] = useState(0);

  const handleNextTab = () => {
    setCurrentTab(currentTab + 1);
  }

  return (
    <div className='app-card'>
      <div>
        <img/>
        <h1>Form Heading</h1>
      </div>
      <Tabs selectedIndex={currentTab} onSelect={index => setCurrentTab(index)}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
        </TabList>
        <TabPanel>
          <Tab1 details={{setFormData, handleNextTab}}/>
        </TabPanel>
        <TabPanel>
          <Tab2 details={{handleNextTab, formData, setFormData}}/>
        </TabPanel>
        <TabPanel>
          <Tab3 details={{formData, setFormData}}/>
        </TabPanel>
        <TabPanel>
          <Tab4/>
        </TabPanel>
        <TabPanel>
          <Tab5 formData={formData}/>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default App
