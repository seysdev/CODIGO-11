import { Header } from './components/Header';
import { Main } from './components/Main';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Grid } from './components/Grid';
import './app.css'; // importando css en js

function App() {
  const alumnos = [
    {
      name: 'sebastian',
      lastname: 'yabiku',
      age: 34,
      photo:
        'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg',
    },
    {
      name: 'jose',
      lastname: 'yabiku',
      age: 34,
      photo:
        'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg',
    },
    {
      name: 'melisa',
      lastname: 'yabiku',
      age: 34,
      photo:
        'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg',
    },
    {
      name: 'luis',
      lastname: 'yabiku',
      age: 34,
      photo:
        'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg',
    },
  ];

  function Hola(props) {
    return <div>HOla {props.name}</div>;
  }

  return (
    <div className="app">
      <Hola name="jose" />
      <Hola name="pepe" />
      <Header />
      <Main>
        <Grid columns={4}>
          {alumnos.map((alumno) => (
            <Card
              name={alumno.name}
              lastname={alumno.lastname}
              age={alumno.age}
              photo={alumno.photo}
            />
          ))}
        </Grid>
        <br />
        <br />
        <Grid columns={2}>
          {alumnos.map((alumno) => (
            <Card
              name={alumno.name}
              lastname={alumno.lastname}
              age={alumno.age}
              photo={alumno.photo}
            />
          ))}
        </Grid>
      </Main>
      <Footer />
    </div>
  );
}

export { App };
