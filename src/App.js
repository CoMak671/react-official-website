import { NavLink } from 'react-router';
import { RoutingTable } from './router';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        {RoutingTable.map((route, index) => (
          <NavLink key={index} to={`/${route.title}`} end>
            {route.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default App;
