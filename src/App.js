import './App.css';
import Assets from './components/Assets';

function App() {

  fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  return (
    <div>
      <Assets />
    </div>
  );
}

export default App;
