export default function Footer() {
  return (
    <footer className="text-gray-100" role="contentinfo" aria-label="Footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 bg-gray-900 px-4">
        <div className="max-w-md pt-3">
          <h2 className="text-2xl font-bold mb-2 text-blue-500">One New World</h2>
          <p className="text-sm mb-4 text-gray-100">
            Stay informed with the latest headlines, insights, and stories from around the globe. Explore the world of news, arts, lifestyle, and more.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Explore News
          </button>
        </div>
        <div>
          <h3 className="font-semibold mb-2 mt-3 text-pink-200">General & Company Info</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">ONWCo</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Work with us</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">T Brand Studio</a></li>
            <li><a href="#">Your Ad Choices</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 mt-3 text-pink-200">Legal, Global & Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Terms of Sale</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Canada</a></li>
            <li><a href="#">International</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 mt-2 text-pink-200">Social</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Twitter (X.com)</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
          <div className="my-4 text-gray-900">
            <label htmlFor="lang" className="block mb-1 text-sm font-semibold text-pink-200">Language</label>
            <select
              id="lang"
              className="w-full border border-gray-300 p-2 rounded text-sm"
            >
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4 pb-10 text-sm flex flex-col md:flex-row justify-between items-center text-gray-100 bg-gray-900">
        <p>© 2025 One New World Company</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}