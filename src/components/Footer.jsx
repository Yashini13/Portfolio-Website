import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gray-900 text-white py-6 flex flex-col items-center gap-3"
    >
      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/in/yashini-pardeshi-608657211/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="hover:text-blue-400 transition-all duration-200" />
        </a>
        <a href="https://github.com/Yashini13" target="_blank" rel="noopener noreferrer">
          <Github className="hover:text-gray-300 transition-all duration-200" />
        </a>
        <a href="mailto:yashinipardeshi@gmail.com">
          <Mail className="hover:text-red-400 transition-all duration-200" />
        </a>
      </div>
      <p className="text-sm text-gray-400">© 2025 Yashini Pardeshi</p>
    </motion.footer>
  );
};

export default Footer;
