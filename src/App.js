import './App.css';
import Mensaje from './Mensaje.js'

  
  const Description = () => {
    return <p>Essta es la aplicacion</p>
  }
  

const App = () => {
  return (
    <div className="App">
      <Mensaje message="Estamos trabajando" />
      <Description />
    </div>
  );
}

export default App;
