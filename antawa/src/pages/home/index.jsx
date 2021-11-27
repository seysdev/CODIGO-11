import { Tabs } from 'antd';
import { FormBuscarTodos } from './FormBuscarTodos';
import './home.css';

function PageHome() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="page-home">
      <h1>PAGINA HOME</h1>
      <div className="mx-auto">
        <Tabs
          className="tab-mod"
          defaultActiveKey="1"
          onChange={callback}
          type="card"
          centered
        >
          <TabPane tab="TODOS" key="1">
            <FormBuscarTodos />
          </TabPane>
          <TabPane tab="Nuevos" key="2">
            FORMULARIO DE NUEVOS
          </TabPane>
          <TabPane tab="Usados" key="3">
            FORMULARIO DE USADOS
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export { PageHome };
