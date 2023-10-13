import './App.css';
import { AppRoutes } from '../AppRoutes/AppRoutes';
import { GlobalStorageProvider } from '../GlobalStorage/GlobalStorage';

function App() {
  return (
    <GlobalStorageProvider>
      <div className='App'>
        <AppRoutes />
      </div>
    </GlobalStorageProvider>
  );
}

export default App;
