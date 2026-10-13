import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  // Mock data - Iresha backend routes හදනකම් මේක use කරමු
  const [menuItems, setMenuItems] = useState([
    { _id: '1', name: 'Espresso', category: 'Coffee', price: 350, available: true },
    { _id: '2', name: 'Cappuccino', category: 'Coffee', price: 450, available: true },
    { _id: '3', name: 'Latte', category: 'Coffee', price: 500, available: true },
    { _id: '4', name: 'Chocolate Cake', category: 'Dessert', price: 650, available: true },
    { _id: '5', name: 'Chicken Sandwich', category: 'Food', price: 750, available: false },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', category: 'Coffee', price: '', available: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      _id: Date.now().toString(),
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      available: formData.available,
    };
    setMenuItems([...menuItems, newItem]);
    setFormData({ name: '', category: 'Coffee', price: '', available: true });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuItems(menuItems.filter((item) => item._id !== id));
    }
  };

  const handleToggleAvailability = (id) => {
    setMenuItems(menuItems.map((item) =>
      item._id === id ? { ...item, available: !item.available } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">☕</div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Menu Management</h1>
              <p className="text-sm text-gray-500">Manage your cafe menu items</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-5 py-2 rounded-lg transition">
            ← Back to Dashboard
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Menu Items</h2>
            <p className="text-gray-500">Total: {menuItems.length} items</p>
          </div>
          <button onClick={() => setShowForm(!showForm)} className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-5 py-2 rounded-lg transition">
            {showForm ? '✕ Cancel' : '+ Add New Item'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Add New Menu Item</h3>
            <form onSubmit={handleAddItem} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="e.g. Iced Coffee" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select name="category" value={formData.category} onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none bg-white">
                  <option value="Coffee">Coffee</option>
                  <option value="Tea">Tea</option>
                  <option value="Food">Food</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Beverage">Beverage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (Rs.)</label>
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} required min="0" step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="e.g. 450" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="available" checked={formData.available} onChange={handleInputChange} id="available" className="w-4 h-4 text-amber-600" />
                <label htmlFor="available" className="ml-2 text-sm font-medium text-gray-700">Available for order</label>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition">
                  Add Item to Menu
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item) => (
            <div key={item._id} className={`bg-white rounded-xl shadow-md p-5 transition-all ${item.available ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500 opacity-75'}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                  <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-700 mt-1">{item.category}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </div>
              <p className="text-2xl font-bold text-amber-600 mb-4">Rs. {item.price.toFixed(2)}</p>
              <div className="flex gap-2">
                <button onClick={() => handleToggleAvailability(item._id)} className="flex-1 text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
                  {item.available ? 'Mark Unavailable' : 'Mark Available'}
                </button>
                <button onClick={() => handleDelete(item._id)} className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;