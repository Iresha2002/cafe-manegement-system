import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import cafeBg from '../assets/cafe-bg.jpg';
import coffeeCup from '../assets/coffee-cup.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, name, role } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', JSON.stringify({ name, role }));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl grid md:grid-cols-2 min-h-[600px]">

        {/* LEFT SIDE */}
        <div
          className="relative hidden md:flex flex-col p-10 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.35)), url(${cafeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top: Logo */}
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
              <img src={coffeeCup} alt="Coffee Cup" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <h1 className="text-2xl font-serif font-semibold mb-1">CafeManager</h1>
            <p className="text-xs tracking-widest text-gray-300">MANAGE · SERVE · GROW</p>
          </div>

          {/* Bottom: Wave */}
          <div className="relative -mx-10 -mb-10 mt-auto">
            <div className="relative h-28">
              <svg
                className="absolute bottom-0 left-0 w-full h-full"
                viewBox="0 0 500 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 C150,100 350,20 500,60 L500,100 L0,100 Z"
                  fill="#e8f5e9"
                />
              </svg>
              <div className="absolute bottom-3 right-8 text-2xl opacity-70 z-10">
                🌿
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Login Form */}
        <div className="p-6 md:p-10 flex flex-col bg-[#fafaf7]">

          <div className="text-right text-sm text-gray-500 mb-6">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-gray-800 hover:text-green-800">
              Create one
            </Link>
          </div>

          <div className="mt-8 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-500 text-sm">Login to your account</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none bg-white transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none bg-white transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-green-800"
                />
                Remember me
              </label>
              <a href="#" className="text-gray-600 hover:text-green-800">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? 'Logging in...' : <>Login <span>→</span></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;