import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  const isAdmin = userInfo?.role === 'admin';

  const adminCards = [
    { icon: '🍽️', title: 'Manage Menu', desc: 'Add, edit, or remove menu items' },
    { icon: '👥', title: 'Manage Users', desc: 'View and manage staff accounts' },
    { icon: '📊', title: 'View Reports', desc: 'Sales and performance reports' },
    { icon: '📦', title: 'View All Orders', desc: 'See all orders from all staff' },
  ];

  const staffCards = [
    { icon: '🛒', title: 'Take Order', desc: 'Create a new order for a customer' },
    { icon: '📋', title: "View Today's Orders", desc: 'See orders placed today' },
    { icon: '🍽️', title: 'View Menu', desc: 'Browse the cafe menu' },
  ];

  const cards = isAdmin ? adminCards : staffCards;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">☕</div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Cafe Management System</h1>
              <p className="text-sm text-gray-500">Welcome back, {userInfo?.name}!</p>
            </div>
          </div>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Role Badge */}
        <div className="mb-8">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            isAdmin 
              ? 'bg-blue-100 text-blue-700 border border-blue-200' 
              : 'bg-green-100 text-green-700 border border-green-200'
          }`}>
            {isAdmin ? '👨‍💼 ADMIN' : '👨‍🍳 STAFF'}
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            {isAdmin ? 'Admin Panel' : 'Staff Panel'}
          </h2>
          <p className="text-gray-500 mt-1">
            {isAdmin ? 'Manage your cafe from here' : 'Your daily tasks'}
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`grid gap-5 ${
          isAdmin ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl p-6 cursor-pointer transition-all border-t-4 ${
                isAdmin ? 'border-blue-500 hover:border-blue-600' : 'border-green-500 hover:border-green-600'
              }`}
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;