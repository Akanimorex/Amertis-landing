import { Coins } from 'lucide-react';
import Image from 'next/image';
import Logo from "/public/icons/Logo.svg";

const socialLinks = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "Discord" },
  { href: "#", label: "Documentation" }
];

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image
						src={Logo}
						alt="Logo"
						className=" h-[32px] w-[32px] "
					/>               <span className="text-xl font-bold">Artemis</span>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          © {new Date().getFullYear()} Artemis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}