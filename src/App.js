import './App.css';
import UseReference from './Hooks/UseRef/UseReference';
import UseLayoutEffect from './Hooks/UseLayoutEffect/UseLayoutEffect';
import ImperativeParent from './Hooks/UseImperativeHandle/ImperativeParent';

function App() {
  return (
    <div className="App">
      <ImperativeParent />
    </div>
  );
}

export default App;
