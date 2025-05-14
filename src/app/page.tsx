import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import SocialLink from './components/SocialLink';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">kant.sdev</h1>
        <p className="text-gray-400">Desenvolvedor Front</p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <SocialLink
          href="https://wa.me/+5563999466193"
          title="WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
        </SocialLink>

        <SocialLink
          href="https://www.instagram.com/kant.sdev/"
          title="Instagram"
        >
          <FaInstagram className="text-xl" />
        </SocialLink>

        <SocialLink
          href="https://www.linkedin.com/in/kau%C3%A3-cantanh%C3%AAde-dos-santos-2b9b43259/"
          title="LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </SocialLink>

        <SocialLink
          href="https://github.com/kant-sdev?tab=repositories"
          title="GitHub"
        >
          <FaGithub className="text-xl" />
        </SocialLink>
      </div>

      <footer className="mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} - Todos os direitos reservados
      </footer>
    </main>
  );
}
