// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import OrderCalendar from './components/OrderCalendar';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/calendar" element={<OrderCalendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
