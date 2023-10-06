import './App.css';
import {CurrentUserProvider} from "../Hooks/useCurrentUser";
import {AppRoutes} from "../AppRoutes/AppRoutes";

function App() {
  return <CurrentUserProvider>
    <div className='App'>
      <AppRoutes />
    </div>
  </CurrentUserProvider>
}

export default App;
