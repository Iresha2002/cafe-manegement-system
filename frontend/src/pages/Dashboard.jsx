import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  // අපි මෙතන තමයි role එක අනුව content එක වෙනස් කරන්නේ
  const renderRoleBasedContent = () => {
    if (userInfo?.role === 'admin') {
      return (
        <div style={{ marginTop: '30px' }}>
          <h3>👨‍💼 Admin Panel</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '15px' }}>
            <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#e7f1ff' }}>
              <h4>🍽️ Manage Menu</h4>
              <p>Add, edit, or remove menu items</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#e7f1ff' }}>
              <h4>👥 Manage Users</h4>
              <p>View and manage staff accounts</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#e7f1ff' }}>
              <h4>📊 View Reports</h4>
              <p>Sales and performance reports</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#e7f1ff' }}>
              <h4>📦 View All Orders</h4>
              <p>See all orders from all staff</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: '30px' }}>
          <h3>👨‍🍳 Staff Panel</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '15px' }}>
            <div style={{ padding: '20px', border: '1px solid #28a745', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#e8f5e9' }}>
              <h4>🛒 Take Order</h4>
              <p>Create a new order for a customer</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #28a745', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#e8f5e9' }}>
              <h4>📋 View Today's Orders</h4>
              <p>See orders placed today</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #28a745', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#e8f5e9' }}>
              <h4>🍽️ View Menu</h4>
              <p>Browse the cafe menu</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        <div>
          <h1>☕ Cafe Management System</h1>
          <h2>Welcome, {userInfo?.name}!</h2>
          <p>Role: <strong style={{ color: userInfo?.role === 'admin' ? '#007bff' : '#28a745' }}>{userInfo?.role?.toUpperCase()}</strong></p>
        </div>
        <button 
          onClick={handleLogout} 
          style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
        >
          Logout
        </button>
      </div>

      {renderRoleBasedContent()}
    </div>
  );
};

export default Dashboard;