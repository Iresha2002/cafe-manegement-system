import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import cafeBg from '../assets/cafe-bg.jpg';

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
          className="relative hidden md:flex flex-col justify-between p-10 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${cafeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl">☕</span>
              </div>
              <span className="text-2xl font-serif font-semibold">CafeManager</span>
            </div>
            <p className="text-xs tracking-widest text-gray-300">MANAGE · SERVE · GROW</p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="w-8 h-0.5 bg-white/50"></div>
            <span className="text-gray-300 tracking-wider">Your All-in-One Cafe Management System</span>
          </div>
        </div>

        {/* RIGHT SIDE - Register Form */}
        <div className="p-8 md:p-10 flex flex-col justify-center bg-[#fafaf7] overflow-y-auto max-h-screen">
          
          <div className="text-right text-sm text-gray-500 mb-6">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-gray-800 hover:text-green-800">
              Login
            </Link>
          </div>

          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-500 text-sm">Fill in your details to get started</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-3">
            {/* Full Name */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
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
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
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
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
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
                className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
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
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-white"
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
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 transition text-sm font-medium ${
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
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? 'Creating...' : <>Create Account <span>→</span></>}
            </button>
          </form>

          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white py-3 rounded-xl hover:bg-gray-50 transition">
            <span className="text-lg">🔍</span>
            <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
          </button>

          <div className="mt-6 text-right">
            <p className="text-2xl font-serif italic text-green-900 opacity-60">
              Good Food<br />Better Mood
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;