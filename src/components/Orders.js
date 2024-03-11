import React, { useState } from 'react';

function Orders() {

  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer A', orderDate: '2024-03-07', status: 'Processing' },
    { id: 2, customerName: 'Customer B', orderDate: '2024-03-08', status: 'Shipped' },

  ]);


  const [selectedOrder, setSelectedOrder] = useState(null);


  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };


  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

 
  const deleteOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  return (
    <div>
      <h1>Orders Management</h1>

   
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <strong>Order ID:</strong> {order.id}, <strong>Customer:</strong> {order.customerName},{' '}
            <strong>Order Date:</strong> {order.orderDate}, <strong>Status:</strong> {order.status}{' '}
            <button onClick={() => viewOrderDetails(order)}>View Details</button>{' '}
            <button onClick={() => updateOrderStatus(order.id, 'Shipped')}>Mark as Shipped</button>{' '}
            <button onClick={() => deleteOrder(order.id)}>Delete</button>
          </li>
        ))}
      </ul>


      {selectedOrder && (
        <div>
          <h2>Order Details</h2>
          <p>
            <strong>Order ID:</strong> {selectedOrder.id}
          </p>
          <p>
            <strong>Customer:</strong> {selectedOrder.customerName}
          </p>
          <p>
            <strong>Order Date:</strong> {selectedOrder.orderDate}
          </p>
          <p>
            <strong>Status:</strong> {selectedOrder.status}
          </p>
        </div>
      )}
    </div>
  );
}

export default Orders;
