import './App.css';
import UserProfile from './Components/UserProfile/UserProfile';
import {UserProvider} from './Components/Context/UserData.js'
import DashBoard from './Components/DashBoard/DashBoard.js';

function App() {
  return (
      <div className="App">
        <h1>User's Profiles</h1>
        <UserProvider>
          <DashBoard/>
          <UserProfile/>
        </UserProvider>
      </div>
  );
}

export default App;
