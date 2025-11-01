const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Moki Mark</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Full Stack & Mobile Developer passionate about creating innovative solutions
            and delivering exceptional user experiences.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/markmoki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://markmoki.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Portfolio
            </a>
            <a
              href="mailto:moki.dev01@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://wa.me/254759215000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {currentYear} Moki Mark. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;