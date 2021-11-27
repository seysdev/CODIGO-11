import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { PageHome, PageLogin, PageRegister, PageVendeTuAuto } from './pages';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const { Content } = Layout;

  return (
    <div className="App">
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
