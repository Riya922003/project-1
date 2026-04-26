'use client';

interface FooterProps {
  onEnquire: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const FOOTER_LINKS = [
  { label: 'About',          href: '#' },
  { label: 'Blog',           href: '#' },
  { label: 'Why Accredian', href: '#' },
] as const;

const CONTACT_INFO = {
  email:   'enterprise@accredian.com',
  address: '4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana',
} as const;

const SOCIAL_LINKS = [
  { icon: 'facebook',  href: 'https://facebook.com/accredian',            label: 'Facebook'  },
  { icon: 'linkedin',  href: 'https://linkedin.com/company/accredian',    label: 'LinkedIn'  },
  { icon: 'twitter',   href: 'https://twitter.com/accredian',             label: 'Twitter'   },
  { icon: 'instagram', href: 'https://instagram.com/accredian',           label: 'Instagram' },
  { icon: 'youtube',   href: 'https://youtube.com/@accredian',            label: 'YouTube'   },
] as const;

const DIVIDER_STYLE = { borderColor: '#1d1c1f' } as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.866.86 4.926 4.926 0 002.16-2.773c-.951.555-2.005.959-3.127 1.184a4.822 4.822 0 00-8.239 4.39 13.74 13.74 0 01-9.979-5.06 4.822 4.822 0 001.493 6.43 4.784 4.784 0 01-2.191-.616v.06a4.823 4.823 0 003.864 4.724 4.816 4.816 0 01-2.176.084 4.838 4.838 0 004.505 3.352A9.696 9.696 0 010 19.54a13.978 13.978 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  facebook:  <FacebookIcon />,
  linkedin:  <LinkedInIcon />,
  twitter:   <TwitterIcon />,
  instagram: <InstagramIcon />,
  youtube:   <YouTubeIcon />,
};

function SocialIcon({ icon, href, label }: { icon: string; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${label} page`}
      className="text-gray-400 md:text-gray-600 hover:text-blue-600 transition-colors"
    >
      {SOCIAL_ICON_MAP[icon]}
    </a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Footer({ onEnquire }: FooterProps) {
  return (
    <footer className="bg-black md:bg-white py-8 md:py-12 px-6 md:px-16">

      {/* Top row — logo + enquire */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-6">

        {/* Logo + social */}
        <div>
          <h2 className="text-blue-600 font-bold text-2xl">accredian</h2>
          <p className="text-gray-400 md:text-gray-600 text-sm">credentials that matter</p>
          <div className="flex gap-4 mt-4">
            {SOCIAL_LINKS.map((social) => (
              <SocialIcon key={social.icon} {...social} />
            ))}
          </div>
        </div>

        {/* Enquire CTA */}
        <div className="w-full md:w-auto text-center md:text-right">
          <button
            onClick={onEnquire}
            className="bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto"
          >
            Enquire Now
          </button>
          <p className="text-gray-400 md:text-gray-600 text-sm mt-2">Speak with our Advisor</p>
        </div>

      </div>

      <div className="border-t my-6" style={DIVIDER_STYLE} />

      {/* Links + contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">

        {/* Accredian links */}
        <div>
          <h3 className="font-bold text-white md:text-black mb-4">Accredian</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-gray-400 md:text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-bold text-white md:text-black mb-4">Contact Us</h3>
          <div className="space-y-3">
            <p className="text-gray-400 md:text-gray-600 text-sm">
              Email us:{' '}
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline">
                {CONTACT_INFO.email}
              </a>
            </p>
            <p className="text-gray-400 md:text-gray-600 text-sm">
              Office Address: {CONTACT_INFO.address}
            </p>
          </div>
        </div>

      </div>

      <div className="border-t my-6" style={DIVIDER_STYLE} />

      {/* Copyright */}
      <p className="text-center text-gray-500 md:text-gray-400 text-sm">
        © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </p>

    </footer>
  );
}