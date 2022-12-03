import Header from './components/Header'
import Login from './components/Login'

let isLoggedin = true;

function App() {
  return (
    <>
      <div className="App">
        {isLoggedin ? <Header/> : <Login/>}
      </div>
      <div>
        <p>Farklı Div açmak istiyorsak Fragment Kullanabiliriz.</p>
      </div>
      <div className="myClass">
        <p>JSX'de class isimlerini className ile verebiliriz.</p>
      </div>
    </>
  )
}

export default App