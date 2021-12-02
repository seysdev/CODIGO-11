import { useState } from 'react';
import { useDispatch } from 'react-redux';
const users = [
  {
    name: 'sebastian',
    lastname: 'yabiku',
    user: 'syabiku',
    password: '123456',
  },
  {
    name: 'jose',
    lastname: 'yabiku',
    user: 'jyabiku',
    password: '123456',
  },
];

function PageLogin() {
  const [form, setForm] = useState({
    user: '',
    password: '',
  });

  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    const response = users.find(
      (element) =>
        element.user == form.user && element.password == form.password
    );

    if (response) {
      dispatch({
        type: 'SET_LOGIN',
        payload: true,
      });
      dispatch({
        type: 'SET_USER',
        payload: response,
      });
    } else {
      alert('El usuario no existe porfa vor registrate');
    }
  }

  return (
    <div className="page-login text-black">
      <h1 className="text-center mb-10">LOGIN</h1>
      <form onSubmit={onSubmit} className="w-8/12 mx-auto">
        <input
          required
          type="text"
          placeholder="Usuario"
          className="p-4 border rounded-xl border-black w-full mb-8"
          value={form.user}
          onChange={(e) =>
            setForm((state) => ({ ...state, user: e.target.value }))
          }
        />
        <input
          required
          type="password"
          placeholder="Contraseña"
          className="p-4 border rounded-xl border-black w-full mb-8"
          value={form.password}
          onChange={(e) =>
            setForm((state) => ({ ...state, password: e.target.value }))
          }
        />
        <div className="text-center">
          <button class="bg-green-600 p-4 px-8 text-white rounded-xl cursor-pointer">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
}

export { PageLogin };
