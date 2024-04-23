import './App.css';
import UseReference from './Hooks/UseRef/UseReference';
import UseLayoutEffect from './Hooks/UseLayoutEffect/UseLayoutEffect';
import ImperativeParent from './Hooks/UseImperativeHandle/ImperativeParent';
import UseMemo from './Hooks/UseMemo/UseMemo';
import UseCallback from './Hooks/UseCallback/UseCallback';
import UseDeferred from './Hooks/UseDeferredValue/UseDeferred';

function App() {
  return (
    <div className="App">
      <UseDeferred />
    </div>
  );
}

export default App;
