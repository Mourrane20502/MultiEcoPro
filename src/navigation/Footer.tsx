export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">MultiEcoPro</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            MultiEcoPro est une entreprise marocaine innovante spécialisée dans
            la rénovation, l’efficacité énergétique et la transformation digitale.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white transition">Qui sommes-nous</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projets</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🔧 Rénovation & Travaux</li>
            <li>💡 Audit Énergétique</li>
            <li>🌐 Transformation Digitale</li>
            <li>📊 Conseil & Suivi</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>📍 Casablanca, Maroc</li>
            <li>📞 +212 6 12 34 56 78</li>
            <li>✉️ contact@multiecopro.ma</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} MultiEcoPro. Tous droits réservés.
      </div>
    </footer>
  );
}
