import { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { PageHome, PageLogin, PageRegister, PageVendeTuAuto } from './pages';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const { Content } = Layout;

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div className="App">
      <div className="tab">
        <ul className="flex">
          <li
            className={`cursor-pointer mr-2 border border-black p-2 font-bold ${
              currentTab == 1 && 'bg-red-500 text-white'
            }`}
            onClick={() => setCurrentTab(1)}
          >
            TAB 1
          </li>
          <li
            className={`cursor-pointer mr-2 border border-black  p-2 font-bold ${
              currentTab == 2 && 'bg-red-500 text-white'
            }`}
            onClick={() => setCurrentTab(2)}
          >
            TAB 2
          </li>
          <li
            className={`cursor-pointer  border border-black  p-2 font-bold ${
              currentTab == 3 && 'bg-red-500 text-white'
            }`}
            onClick={() => setCurrentTab(3)}
          >
            TAB 3
          </li>
        </ul>
        <div className="border border-black p-4">
          {currentTab == 1 && <div>CONTENIDO DEL TAB 1</div>}
          {currentTab == 2 && <div>CONTENIDO DEL TAB 2</div>}
          {currentTab == 3 && <div>CONTENIDO DEL TAB 3</div>}
        </div>
      </div>
      <Router>
        <Layout className="h-screen ">
          <Header />
          <Content className="container mx-auto p-4">
            <Switch>
              <Route exact path="/">
                <PageHome />
              </Route>
              <Route path="/login">
                <PageLogin />
              </Route>
              <Route path="/register">
                <PageRegister />
              </Route>
              <Route path="/vende-tu-auto">
                <PageVendeTuAuto />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
