import { NavLink } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink
          to="/different-components-at-the-same-position-reset-state"
          end
        >
          different-components-at-the-same-position-reset-state
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
