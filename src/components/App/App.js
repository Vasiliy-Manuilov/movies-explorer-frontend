import './App.css';
import {CurrentUserProvider} from "../../contexts/CurrentUserContext";
import {AppRoutes} from "../AppRoutes/AppRoutes";

function App() {
  return <CurrentUserProvider>
    <div className='App'>
      <AppRoutes />
    </div>
  </CurrentUserProvider>
}

export default App;
