import { Link } from 'react-router-dom';
import cafeBg from '../assets/cafe-bg.jpg';

/* ---------- Inline icons (stroke-based, inherit currentColor) ---------- */
const Icon = ({ children, className = 'w-6 h-6', strokeWidth = 1.8 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const CupIcon = (props) => (
  <Icon {...props}>
    <path d="M4 10h13v4a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6v-4Z" />
    <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
    <path d="M3 21h16" />
    <path d="M8 3c-.6.8-.6 1.7 0 2.5s.6 1.7 0 2.5M11.5 3c-.6.8-.6 1.7 0 2.5s.6 1.7 0 2.5" />
  </Icon>
);
const SproutIcon = (props) => (
  <Icon {...props}>
    <path d="M12 21c0-6 0-10 7-15-1 7-3 11-7 11" />
    <path d="M12 17C8 17 5 14 5 8c4 1 7 4 7 9" />
  </Icon>
);
const UsersIcon = (props) => (
  <Icon {...props}>
    <circle cx="9" cy="8" r="3.5" />
    <circle cx="17" cy="9" r="2.8" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M15.5 14.2A5 5 0 0 1 21.5 19" />
  </Icon>
);
const StarIcon = (props) => (
  <Icon {...props}>
    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z" />
  </Icon>
);
const ClockIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);
const PinIcon = (props) => (
  <Icon {...props}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </Icon>
);
const PhoneIcon = (props) => (
  <Icon {...props}>
    <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  </Icon>
);
const MailIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

/* Social glyphs (filled) */
const socials = [
  {
    label: 'Facebook',
    path: 'M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.3H8v3h2.6V21h2.9Z',
  },
  {
    label: 'Instagram',
    path: 'M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm4.9-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM12 4.6c2.4 0 2.7 0 3.6.1 2.4.1 3.6 1.3 3.7 3.7.1.9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1 2.4-1.3 3.6-3.7 3.7-.9.1-1.2.1-3.6.1s-2.7 0-3.6-.1c-2.4-.1-3.6-1.3-3.7-3.7-.1-.9-.1-1.2-.1-3.6s0-2.7.1-3.6C4.8 6 6 4.8 8.4 4.7c.9-.1 1.2-.1 3.6-.1Z',
  },
  {
    label: 'X',
    path: 'M17.2 4h2.6l-5.7 6.5L20.8 20h-5.2l-4.1-5.3L6.8 20H4.2l6.1-7L3.9 4h5.3l3.7 4.9L17.2 4Zm-.9 14.4h1.4L8.6 5.5H7.1l9.2 12.9Z',
  },
  {
    label: 'YouTube',
    path: 'M20.6 8.2a2.3 2.3 0 0 0-1.6-1.6C17.6 6.2 12 6.2 12 6.2s-5.6 0-7 .4a2.3 2.3 0 0 0-1.6 1.6A24 24 0 0 0 3 12a24 24 0 0 0 .4 3.8A2.3 2.3 0 0 0 5 17.4c1.4.4 7 .4 7 .4s5.6 0 7-.4a2.3 2.3 0 0 0 1.6-1.6A24 24 0 0 0 21 12a24 24 0 0 0-.4-3.8ZM10.2 14.4V9.6l4.6 2.4-4.6 2.4Z',
  },
];

/* Decorative leafy branch */
const LeafBranch = ({ className = '' }) => (
  <svg viewBox="0 0 80 120" fill="none" className={className} aria-hidden="true">
    <path d="M20 115C30 85 42 55 62 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 88c-14-2-24-12-26-26 14 2 24 12 26 26Z" fill="currentColor" />
    <path d="M38 68c4-14 14-22 28-22-4 14-14 22-28 22Z" fill="currentColor" />
    <path d="M44 52C32 46 26 34 28 20c11 7 17 19 16 32Z" fill="currentColor" />
    <path d="M54 32c2-12 9-20 20-22-1 12-9 20-20 22Z" fill="currentColor" />
  </svg>
);

const LeafOutline = ({ className = '' }) => (
  <svg viewBox="0 0 120 160" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
    <path d="M10 150C40 110 70 70 110 15" strokeLinecap="round" />
    <path d="M40 112C18 112 6 96 4 76c22 2 34 16 36 36Z" />
    <path d="M60 86c2-22 18-36 40-36-2 22-18 36-40 36Z" />
    <path d="M72 66C56 56 50 38 54 18c16 10 22 28 18 48Z" />
    <path d="M88 44c4-16 14-26 30-28-4 16-14 26-30 28Z" />
  </svg>
);

const features = [
  { Icon: SproutIcon, title: 'Fresh Ingredients', desc: ['We use only the freshest', 'and highest quality ingredients.'] },
  { Icon: CupIcon, title: 'Great Taste', desc: ['Every dish and drink is', 'crafted with love.'] },
  { Icon: UsersIcon, title: 'Best Service', desc: ['Our team is always here', 'to make your experience special.'] },
];

const stats = [
  { Icon: CupIcon, value: '50+', label: 'Menu Items' },
  { Icon: UsersIcon, value: '1000+', label: 'Happy Customers' },
  { Icon: StarIcon, value: '5★', label: 'Rated Service' },
  { Icon: ClockIcon, value: '24/7', label: 'Open Hours' },
];

const serif = { fontFamily: "'Merriweather', Georgia, serif" };

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#1c2b24]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-[#f7f3ea]/95 backdrop-blur sticky top-0 z-50 border-b border-[#e7e0d0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[72px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 text-[#0f4a33]">
            <CupIcon className="w-9 h-9" strokeWidth={2} />
            <span className="text-xl sm:text-2xl font-bold" style={serif}>Cafe Bliss</span>
          </Link>

          <div className="hidden md:flex items-center gap-14 text-[15px] font-medium">
            <Link to="/" className="text-[#0f4a33] relative py-1 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[#0f4a33] after:rounded">
              Home
            </Link>
          </div>

          {/* Spacer keeps the Home link centred */}
          <div className="hidden md:block w-[160px]" aria-hidden="true" />
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#0b2a1c]">
        {/* Photo pinned to the right; full-bleed on small screens */}
        <img
          src={cafeBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-full md:w-[68%] object-cover object-[50%_65%]"
        />
        {/* Dark green gradient overlay — strong on the left for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a1c] via-[#0b2a1c]/85 to-[#0b2a1c]/40 md:from-[#0b2a1c] md:from-30% md:via-[#0b2a1c]/60 md:via-50% md:to-transparent md:to-75%" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <LeafOutline className="absolute -left-4 top-14 w-24 sm:w-28 text-[#a8c3a0]/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 pt-14 pb-40 sm:pt-16 sm:pb-48 text-white">
          <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2 rounded-full border border-white/70 text-sm font-medium backdrop-blur-sm bg-black/10">
            <CupIcon className="w-4 h-4 text-[#e9c77a]" />
            Good Food <span className="opacity-70">•</span> Great Coffee <span className="opacity-70">•</span> Happy Moments
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1]" style={serif}>
            Welcome to <br />
            <span className="text-[#b9d3b0]">Cafe Bliss</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed">
            Experience the finest coffee, delicious food, and warm hospitality.
            Manage your cafe effortlessly with our modern management system.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="px-11 py-3.5 rounded-full bg-[#1f6b45] hover:bg-[#25804f] font-semibold shadow-lg transition"
            >
              Get Started →
            </Link>
            <a
              href="#features"
              className="px-10 py-3.5 rounded-full border-2 border-white/90 font-semibold hover:bg-white hover:text-[#0f4a33] transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 sm:h-32"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 70C120 110 240 130 380 118C560 102 700 60 900 66C1100 72 1250 110 1440 90V140H0Z" fill="#a8c3a0" opacity="0.75" />
          <path d="M0 95C160 135 300 140 460 126C640 110 800 80 1000 86C1180 92 1320 110 1440 104V140H0Z" fill="#f7f3ea" />
        </svg>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="relative py-14 sm:py-16 scroll-mt-20">
        <LeafBranch className="hidden lg:block absolute left-24 top-1/2 -translate-y-1/2 w-20 text-[#8fae86]" />
        <LeafBranch className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-20 text-[#8fae86] -scale-x-100" />

        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {features.map(({ Icon: FeatureIcon, title, desc }, i) => (
            <div
              key={title}
              className={`text-center px-6 ${i > 0 ? 'md:border-l md:border-[#d8d0bd]' : ''}`}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#1f5c3e] text-white flex items-center justify-center shadow-md">
                <FeatureIcon className="w-8 h-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#0f2a1e]">{title}</h3>
              <p className="mt-2 text-[15px] text-[#55615a] leading-relaxed">
                {desc[0]}
                <br />
                {desc[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${cafeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        <div className="absolute inset-0 bg-[#0d3524]/90 backdrop-blur-sm" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-10 text-white">
          {stats.map(({ Icon: StatIcon, value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center ${i > 0 ? 'md:border-l md:border-white/25' : ''} ${i % 2 === 1 ? 'border-l border-white/25 md:border-l' : ''}`}
            >
              <StatIcon className="w-8 h-8" />
              <div className="mt-2 text-4xl sm:text-[40px] font-bold" style={serif}>{value}</div>
              <p className="mt-1 text-white/90 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="bg-[#0f3a29] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr_1fr] gap-8 lg:gap-0 items-center">
          {/* Brand */}
          <div className="flex items-center gap-4 lg:pr-8">
            <CupIcon className="w-14 h-14" strokeWidth={1.6} />
            <div>
              <div className="text-2xl font-bold" style={serif}>Cafe Bliss</div>
              <p className="text-sm text-white/75 mt-1 whitespace-nowrap">Good Food <span className="mx-1">•</span> Better Mood</p>
            </div>
          </div>

          {/* Contact */}
          <ul className="space-y-2.5 text-sm text-white/90 lg:border-l lg:border-white/20 lg:pl-16">
            <li className="flex items-center gap-4">
              <PinIcon className="w-5 h-5 shrink-0" />
              123 Coffee Lane, Colombo, Sri Lanka
            </li>
            <li className="flex items-center gap-4">
              <PhoneIcon className="w-5 h-5 shrink-0" />
              <a href="tel:+94112345678" className="hover:underline">+94 11 234 5678</a>
            </li>
            <li className="flex items-center gap-4">
              <MailIcon className="w-5 h-5 shrink-0" />
              <a href="mailto:info@cafebliss.com" className="hover:underline">info@cafebliss.com</a>
            </li>
          </ul>

          {/* Social */}
          <div className="lg:border-l lg:border-white/20 lg:pl-16">
            <p className="font-semibold mb-3">Follow Us</p>
            <div className="flex gap-3">
              {socials.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white text-[#0f3a29] flex items-center justify-center hover:bg-[#b9d3b0] transition"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/80 lg:border-l lg:border-white/20 lg:pl-8 lg:text-right lg:whitespace-nowrap">
            © 2026 Cafe Bliss. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
