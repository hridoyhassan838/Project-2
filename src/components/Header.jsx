import { useAuth } from "../context/AuthContext";



const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/blog" className="hover:underline">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;