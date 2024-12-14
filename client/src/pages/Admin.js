import React from 'react';
import CreateStore from '../components/AdminDashboard/CreateStore';
import OrderManagement from '../components/AdminDashboard/OrderManagement';

function Admin() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <CreateStore />
      <OrderManagement />
    </div>
  );
}

export default Admin;
