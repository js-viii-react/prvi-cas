import logo from './logo.svg';
import './App.css';
import Counter from  "./components/Counter"
import Counters from  "./components/Counters"

function App() {
  return (
    <div className='my-app'>
      {/* Iza viticastih zagrada 2+2 = { 2+2 } */}
      {/* <Counter /> */}
      <Counters />
    </div>
  );
}

export default App;
