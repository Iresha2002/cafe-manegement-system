import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import cafeBg from '../assets/cafe-bg.jpg';
import coffeeCup from '../assets/coffee-cup.png';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('staff');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError('Passwords do not match!');
    }
    if (!agreeTerms) {
      return setError('Please agree to the Terms & Conditions');
    }

    setLoading(true);
    try {
      const response = await api.post('/auth/register', { name, email, password, role });
      const { token, name: userName, role: userRole } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', JSON.stringify({ name: userName, role: userRole }));
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

          {/* Bottom: Wave - use mt-auto to push it to bottom */}
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

        {/* RIGHT SIDE - Register Form */}
        <div className="p-6 md:p-8 flex flex-col justify-center bg-[#fafaf7]">

          <div className="text-right text-sm text-gray-500 mb-4">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-gray-800 hover:text-green-800">
              Login
            </Link>
          </div>

          <div className="mb-5">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Create Account</h1>
            <p className="text-gray-500 text-sm">Fill in your details to get started</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-2.5">
            {/* Full Name */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📞</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
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
                minLength={6}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
                className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
              />
            </div>

            {/* Role Selector */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Register as</p>
              <div className="flex gap-2">
                {[
                  { value: 'admin', label: 'Admin', icon: '👤' },
                  { value: 'staff', label: 'Staff', icon: '👥' },
                ].map((r) => (
                  <button
                    type="button"
                    key={r.value}
                    onClick={() => setRole(r.value)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border-2 transition text-sm font-medium ${
                      role === r.value
                        ? 'border-green-800 bg-green-800 text-white'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <span>{r.icon}</span> {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 accent-green-800 mt-0.5"
              />
              <span>
                I agree to the{' '}
                <span className="font-semibold text-green-900">Terms & Conditions</span> and{' '}
                <span className="font-semibold text-green-900">Privacy Policy</span>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? 'Creating...' : <>Create Account <span>→</span></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;