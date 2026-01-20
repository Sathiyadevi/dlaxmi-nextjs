export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">
          Dlaxmi Infotech
        </h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/services" className="hover:text-blue-600">Services</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
