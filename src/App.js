import Header from './components/Header';
import "./styles.css"
import api from './services/api';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
     <Header />
     <Main />
    </div>
  );
}

export default App;
