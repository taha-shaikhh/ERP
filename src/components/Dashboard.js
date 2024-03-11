import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="dashboard-metric">
        <h2>Total Products :</h2>
        <h2>10</h2>
      </div>
      <div className="dashboard-metric">
        <h2>Total Orders :</h2>
        <h2>2</h2>
      </div>


      <a href="/products" style={{ color: 'blue' }}>Go to Products</a>
      <br/>
      <a href="/orders" style={{ color: 'blue' }}>Go to Orders</a>
    </div>
  );
}

export default Dashboard;