import { useState } from 'react';

function Formulario() {
  const countries = [
    {
      title: 'Peru',
      value: 'per',
    },
    {
      title: 'Argentina',
      value: 'arg',
    },
    {
      title: 'Panama',
      value: 'pan',
    },
    {
      title: 'Uruguay',
      value: 'uru',
    },
  ];

  const [dataForm, setDataForm] = useState({
    name: '',
    lastname: '',
    age: '',
    country: '',
    sex: '',
    hobbies: [],
    tel: '',
    direction: '',
  });

  const [alumnos, setAlumnos] = useState([]);

  function handleEventSubmit(e) {
    e.preventDefault();

    // envio el dato al backend
    console.log('dataForm', dataForm);
    setAlumnos([...alumnos, dataForm]);
  }

  return (
    <div>
      <h1>AGREGAR ALUMNO</h1>
      <form onSubmit={handleEventSubmit}>
        <div class="row">
          <div>
            <input
              required
              value={dataForm.name}
              type="text"
              placeholder="Nombre"
              onChange={(e) => {
                setDataForm((state) => {
                  return {
                    ...state,
                    name: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div>
            <input
              required
              value={dataForm.lastname}
              type="text"
              placeholder="Apellido"
              onChange={(e) => {
                setDataForm((state) => {
                  return {
                    ...state,
                    lastname: e.target.value,
                  };
                });
              }}
            />
          </div>
        </div>
        <div class="row">
          <div>
            <input
              required
              value={dataForm.age}
              type="text"
              placeholder="Edad"
              onChange={(e) => {
                setDataForm((state) => {
                  return {
                    ...state,
                    age: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div>
            <select
              required
              value={dataForm.country}
              onChange={(e) => {
                setDataForm((state) => {
                  return {
                    ...state,
                    country: e.target.value,
                  };
                });
              }}
            >
              <option value="">Seleccionar pais</option>
              {countries.map((country) => (
                <option>{country.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div class="row">
          <div>
            <h2>Sexo</h2>
            <label>
              <input
                type="radio"
                name="sex"
                value="m"
                onChange={(e) => {
                  setDataForm((state) => {
                    return {
                      ...state,
                      sex: e.target.value,
                    };
                  });
                }}
              />
              M
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="f"
                onChange={(e) => {
                  setDataForm((state) => {
                    return {
                      ...state,
                      sex: e.target.value,
                    };
                  });
                }}
              />
              F
            </label>
          </div>
          <div>
            <h2>Hobbies</h2>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Futbol"
                onChange={(e) => {
                  setDataForm((state) => {
                    return {
                      ...state,
                      hobbies: state.hobbies.includes(e.target.value)
                        ? state.hobbies.filter(
                            (hobbie) => hobbie !== e.target.value
                          )
                        : [...state.hobbies, e.target.value],
                    };
                  });
                }}
              />
              Futbol
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Voley"
                onChange={(e) => {
                  setDataForm((state) => {
                    return {
                      ...state,
                      hobbies: state.hobbies.includes(e.target.value)
                        ? state.hobbies.filter(
                            (hobbie) => hobbie !== e.target.value
                          )
                        : [...state.hobbies, e.target.value],
                    };
                  });
                }}
              />
              Voley
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Natacion"
                onChange={(e) => {
                  setDataForm((state) => {
                    return {
                      ...state,
                      hobbies: state.hobbies.includes(e.target.value)
                        ? state.hobbies.filter(
                            (hobbie) => hobbie !== e.target.value
                          )
                        : [...state.hobbies, e.target.value],
                    };
                  });
                }}
              />
              Natacion
            </label>
          </div>
        </div>
        <div class="row">
          <div>
            <input
              required
              value={dataForm.tel}
              type="text"
              placeholder="Telefono"
              onChange={(e) => {
                setDataForm((state) => {
                  return {
                    ...state,
                    tel: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div>
            <input
              required
              value={dataForm.direction}
              type="text"
              placeholder="Direccion"
              onChange={(e) => {
                setDataForm((state) => {
                  return {
                    ...state,
                    direction: e.target.value,
                  };
                });
              }}
            />
          </div>
        </div>
        <div class="text-center">
          <button>ENVIAR</button>
        </div>
      </form>
    </div>
  );
}

export { Formulario };
