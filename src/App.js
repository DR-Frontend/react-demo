import React from 'react';
import Curso from './Curso';

const cursos = [
  {
    'title': 'Curso web',
    'profesor': 'Omar Romero',
    'price': 10,
    'image': 'https://placeimg.com/200/100/tech',
    'alt': 'React JS'
  },
  {
    'title': 'Curso css',
    'profesor': 'Tzhacil Romero',
    'price': 20,
    'image': 'https://placeimg.com/200/100/tech',
    'alt': 'React JS'
  },
  {
    'title': 'Curso PHP',
    'profesor': 'Victor Romero',
    'price': 30,
    'image': 'https://placeimg.com/200/100/tech',
    'alt': 'React JS'
  }
]

const App = () => (
  <>
    <div>
      <h3>React JS Demo</h3> 
      {
        cursos.map(el => <Curso title={el.title} profesor={el.profesor} price={el.price} image={el.image}/>)
      }
    </div>
  </>
)

export default App;
