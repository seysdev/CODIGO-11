import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Button  } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

function Nav() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="flex items-center">
      <ul className="flex items-center text-xl">
        <li className="mr-4">
          <NavLink to="/autos-usados">Usados</NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/financiacion">Financiacion</NavLink>
        </li>
        <li className="mr-4">
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <span className="flex items-center">
              <span className="cursor-pointer">MAX</span>
              <CaretDownOutlined />
            </span>
          </Dropdown>
        </li>
        <li className="mr-4">
          <Button className="rounded-xl bg-complementary hover:bg-complementary font-bold" >
            <NavLink to="/financiacion">Vende tu auto</NavLink>
          </Button >
        </li>
        <li className="mr-4">
          <NavLink to="/register">Registrar</NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/login">Ingresar</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };
