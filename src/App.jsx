import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Tab1 from './components/tab1';
import Tab2 from "./components/tab2";
import Tab3 from "./components/tab3";
import './App.css'

function App() {
  

  return (
    <div className='app-card'>
      <div>
        <img/>
        <h1>Form Heading</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanel>
          <Tab1/>
        </TabPanel>
        <TabPanel>
          <Tab2/>
        </TabPanel>
        <TabPanel>
          <Tab3/>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default App
