import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Nav } from '../';
function Header() {
  const { Header } = Layout;

  return (
    <Header className="bg-primary text-white flex justify-between items-center ">
      <Link className="text-4xl leading-none" to="/">Logo</Link>
      <Nav />
    </Header>
  );
}

export { Header };
