import './index.css';
import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <main className="App">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
    </main>
  );
}

export default App;
