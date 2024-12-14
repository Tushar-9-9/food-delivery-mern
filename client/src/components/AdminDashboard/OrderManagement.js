import React, { useEffect, useState } from 'react';
import axios from '../../api/orderApi';

function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('/');
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order Management</h2>
      <table>
        <thead>
          <tr>
            <th>Store</th>
            <th>Aggregator</th>
            <th>Time Elapsed</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.storeId}</td>
              <td>{order.aggregator}</td>
              <td>
                {/* Calculate time elapsed */}
                {new Date().getTime() - new Date(order.eventLog.slice(-1)[0].timestamp).getTime()} ms
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagement;
