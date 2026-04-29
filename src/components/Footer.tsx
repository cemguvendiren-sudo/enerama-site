export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="https://cdn.prod.website-files.com/69c9538c5e6a6b66c71a24ee/69c992866f0ef04c0f6599ed_Enerama.jpg"
              alt="Enerama Environmental Technologies"
              className="h-10 w-auto mb-4 bg-white p-1 rounded"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
              Environmental Technologies delivering sustainable climate control solutions worldwide. PCT patented Liquid Desiccant platform — 14 years field-proven, 27 projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/enerama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/enerama_technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/technology" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="/how-we-work" className="hover:text-white transition-colors">How We Work</a></li>
              <li><a href="/investors" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/applications" className="hover:text-white transition-colors">Applications</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Global Offices</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="font-semibold text-white">USA</div>
                <div className="text-gray-400">616 S El Camino Real, Ste A<br/>San Clemente, CA 92672</div>
              </li>
              <li>
                <div className="font-semibold text-white">Switzerland</div>
                <div className="text-gray-400">Zürich</div>
              </li>
              <li>
                <div className="font-semibold text-white">Türkiye</div>
                <div className="text-gray-400">Aydınlı mah. IAYOSB 10. sokak 3<br/>Tuzla, 34953 Istanbul</div>
              </li>
              <li>
                <div className="font-semibold text-white">Azerbaijan <span className="text-xs text-gray-500 font-normal">(Rep. Office)</span></div>
                <div className="text-gray-400">Baku</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>© {currentYear} Enerama Environmental Technologies. All rights reserved.</div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="mailto:info@enerama.com" className="hover:text-white transition-colors">info@enerama.com</a>
            <span className="text-gray-600">·</span>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-600">·</span>
            <span>PCT Patent Pending</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
