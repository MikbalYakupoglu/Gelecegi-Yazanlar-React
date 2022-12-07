// import Header from './components/Header'
// import Login from './components/Login'
import Counter from './components/Counter';
import User from './components/User'
import Colors from './components/Colors'
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {/* <User/> */}
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Gizle/Göster</button>

      {/* <Colors/> */}
      {/* <Form/> */}
    </div>
  );
}

export default App