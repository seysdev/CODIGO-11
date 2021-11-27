import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../components/header';
import { Main } from '../../components/main';
import { Footer } from '../../components/footer';

function LayoutPublic(props) {
  const { children, isLogin } = props;

  return (
    <div className="layout-public">
      <Router>
        {!isLogin && <Header />}
        <Main>{children}</Main>
        {!isLogin && <Footer />}
      </Router>
    </div>
  );
}

export { LayoutPublic };
