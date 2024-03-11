import React from 'react';
import { useState } from 'react';
import '../styles/OrderCalendar.css'; 

// function OrderCalendar() {

//   const ordersWithDates = [
//     { id: 1, customerName: 'Customer A', expectedDeliveryDate: '2024-03-10', status: 'Processing' },
//     { id: 2, customerName: 'Customer B', expectedDeliveryDate: '2024-03-12', status: 'Shipped' },

//   ];


//   const [selectedDate, setSelectedDate] = useState('');

//   const filterOrdersByDate = (date) => {
//     return ordersWithDates.filter((order) => order.expectedDeliveryDate === date);
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     const filteredOrders = filterOrdersByDate(date);

//   };

//   return (
//     <div className="calendar-container">
//       <h1>Orders Calendar View</h1>

//       <div className="calendar-buttons">
//         <button onClick={() => handleDateClick('2024-03-10')}>2024-03-10</button>
//         <button onClick={() => handleDateClick('2024-03-12')}>2024-03-12</button>

//       </div>


//       <div>
   
//         <div>
//           <div className={`calendar-date ${selectedDate === '2024-03-10' ? 'selected' : ''}`} onClick={() => handleDateClick('2024-03-10')}>
//             2024-03-10
//           </div>
//           <div className={`calendar-date ${selectedDate === '2024-03-12' ? 'selected' : ''}`} onClick={() => handleDateClick('2024-03-12')}>
//             2024-03-12
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default OrderCalendar;
function OrderCalendar() {

  const [ordersWithDates, setOrdersWithDates] = useState([
    { id: 1, customerName: 'Customer A', expectedDeliveryDate: '2024-03-10', status: 'Processing' },
    { id: 2, customerName: 'Customer B', expectedDeliveryDate: '2024-03-12', status: 'Shipped' },

  ]);


  const [selectedDate, setSelectedDate] = useState('');


  const filterOrdersByDate = (date) => {
    return ordersWithDates.filter((order) => order.expectedDeliveryDate === date);
  };


  const handleDateClick = (date) => {
    setSelectedDate(date);
    
    const filteredOrders = filterOrdersByDate(date);
    console.log(`Orders for ${date}:`, filteredOrders);
    document.getElementById("dates").textContent =   `Orders Details for ${date}: ${JSON.stringify(filteredOrders)}`;
  };

  return (
    <div>
      <h1>Orders Calendar View</h1>


      <div>
        <div>
          <button onClick={() => handleDateClick('2024-03-10')}>2024-03-10</button>
          <button onClick={() => handleDateClick('2024-03-12')}>2024-03-12</button>

        </div>
        <br/>
        <div id='dates'>

        </div>
      </div>
    </div>
  );
}

export default OrderCalendar;