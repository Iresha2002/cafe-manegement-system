import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import cafeBg from '../assets/cafe-bg.jpg';

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
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl grid md:grid-cols-2">
        
        {/* LEFT SIDE - Cafe Image */}
        <div 
          className="relative hidden md:flex flex-col p-10 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${cafeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top: Logo (Center) */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl">☕</span>
              </div>
              <span className="text-2xl font-serif font-semibold">CafeManager</span>
            </div>
            <p className="text-xs tracking-widest text-gray-300">MANAGE · SERVE · GROW</p>
          </div>

          {/* Middle: Tagline (Center of the panel) */}
          <div className="text-center mt-[550px]">
            <p className="text-lg font-serif text-white/90 leading-snug">
              Better Coffee<br />Better Business
            </p>
            <div className="w-12 h-0.5 bg-white/50 mx-auto mt-4"></div>
          </div>
        </div>

        {/* RIGHT SIDE - Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-[#fafaf7]">
          
          <div className="text-right text-sm text-gray-500 mb-8">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-gray-800 hover:text-green-800">
              Create one
            </Link>
          </div>

          <div className="mb-8">
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
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none bg-white transition"
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
                className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none bg-white transition"
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
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? 'Logging in...' : <>Login <span>→</span></>}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white py-3 rounded-xl hover:bg-gray-50 transition">
            <span className="text-lg">🔍</span>
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>

          <div className="mt-8 text-right">
            <p className="text-2xl font-serif text-green-900 opacity-60">
              Good Food<br />Better Mood
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;