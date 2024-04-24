import Galeria from "./components/Galeria/Galeria";
import GaleriaItem from "./components/GaleriaItem/GaleriaItem";

let imagenes = [
  require('./imagenes/Camion.jpg'),
  require('./imagenes/Soumaya.jpg'),
  require('./imagenes/Torre.jpg')
];

let texto = [
  'Transporte','Museos','Celebraciones'
];


function App() {
  return (
    <div className="App">
      
      <h1>Ciudad de México</h1>

      <Galeria>
        
        {imagenes.map((imagen, index) => (
          <GaleriaItem key={index} imagen ={imagen} texto = {texto[index]}/>
        ))}
      
      </Galeria>

    </div>
  );
}

export default App;
