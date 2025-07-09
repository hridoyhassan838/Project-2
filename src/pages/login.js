export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header */}
      <header className="w-full border-y border-gray-300 py-4 text-center">
        <h1 className="text-2xl font-serif font-bold">One New World</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-md">
          {/* Title */}
          <h2 className="text-xl font-medium mb-6 text-center">
            Log in or create an account
          </h2>

          {/* Email Input Form */}
          <form className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium cursor-pointer"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
                aria-describedby="emailHelp"
              />
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6" aria-hidden="true">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500 select-none">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Terms */}
          <p className="text-xs text-center text-gray-600 mb-6 leading-relaxed">
            By continuing, you agree to the{" "}
            <a href="#" className="underline hover:text-black">
              Terms of Sale
            </a>
            ,{" "}
            <a href="#" className="underline hover:text-black">
              Terms of Service
            </a>
            , and{" "}
            <a href="#" className="underline hover:text-black">
              Privacy Policy
            </a>
            .
          </p>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full border border-gray-400 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition"
              aria-label="Continue with Google"
            >
              <span className="text-lg" aria-hidden="true">
                🌐
              </span>
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              className="w-full border border-gray-400 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition"
              aria-label="Continue with Apple"
            >
              <span className="text-lg" aria-hidden="true">
                🍎
              </span>
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* SSO Link */}
          <div className="text-center mt-6">
            <a
              href="#"
              className="underline text-sm hover:text-black"
              aria-label="Continue with work or school single sign-on"
            >
              Continue with work or school single sign-on &gt;
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 border-t border-gray-300 py-4 mt-auto space-y-1">
        <p>© 2025 One New World Company</p>
        <nav
          className="flex flex-wrap justify-center gap-4"
          aria-label="Footer navigation"
        >
          <a href="#" className="underline hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="underline hover:text-black">
            Help
          </a>
          <a href="#" className="underline hover:text-black">
            Contact Us
          </a>
          <a href="#" className="underline hover:text-black">
            California Notices
          </a>
        </nav>
      </footer>
    </div>
  );
}

// No layout wrapper
LoginPage.getLayout = function getLayout(page) {
  return page;
};