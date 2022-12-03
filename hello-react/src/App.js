// import Header from './components/Header'
// import Login from './components/Login'
import User from './components/User'

let isLoggedin = true;

const user = {
  name : "Muhammet İkbal",
  surname : "Yakupoğlu",
  age : 21
}

function App() {
  return (
      <div>
        {isLoggedin ? <User title = "Kullanıcı" data = {user} friends = {["Ahmet", "Ali", "Mehmet", "Ayşe"]}/> : null}
      </div>
  );
}

export default App