import { useState } from 'react';
import './app.css';

function Task(props) {
  const { tarea, onTarea = () => {} } = props;

  return (
    <div>
      {tarea} <button onClick={() => onTarea(tarea)}>x</button>
    </div>
  );
}

// {/*formulario para enviar tarea*/}
// <form onSubmit={handleSubmit}>

// </form>

function Button(props) {
  const { onFire } = props;

  return <button onClick={() => onFire()}>+ Agregar tarea</button>;
}

function AddTask(props) {
  const { onAddTask } = props;
  const [inputValue, setInputValue] = useState(''); // ESTADO DONDE SE GUARDARA EL VALOR DEL INPUT

  function handleSubmit(e) {
    e.preventDefault();
    // onAddTask(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        placeholder="Ingresar tarea"
        required
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button
        onFire={() => {
          console.log('evento del boton');
          onAddTask(inputValue);
        }}
      />
    </form>
  );
}

function App() {
  const [tareas, setTareas] = useState([]); // ESTADO DONDE SE GUARDARAN LAS TAREAS
  function deleteTask(tarea, tareas) {
    setTareas(tareas.filter((itemTarea) => itemTarea.tarea !== tarea));
  }

  return (
    <div>
      <AddTask
        onAddTask={(tarea) => {
          console.log('tarea', tarea);
          setTareas([
            ...tareas,
            {
              tarea,
            },
          ]);
        }}
      />
      {tareas.length > 0 /*mapeando tareas*/
        ? tareas.map((item) => (
            <Task
              tarea={item.tarea}
              onTarea={(tarea) => {
                deleteTask(tarea, tareas);
              }}
            />
          ))
        : 'No hay tareas pendientes'}
    </div>
  );
}

export { App };
