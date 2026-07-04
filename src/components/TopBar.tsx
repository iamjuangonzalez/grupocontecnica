import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy w-full z-50 hidden md:block">
      <div className="container mx-auto py-2.5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-1 text-xs">
          <div className="flex items-center gap-1.5 text-white/80">
            <MapPin size={12} className="text-blue-brand flex-shrink-0" />
            <span className="font-body">Calle 174b No 55c 10, Bogotá</span>
          </div>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a
              href="mailto:gerencia@gcontecnica.com"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Mail size={12} className="text-blue-brand" />
              <span className="font-body">gerencia@gcontecnica.com</span>
            </a>
            <a
              href="tel:+573165699584"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Phone size={12} className="text-blue-brand" />
              <span className="font-body">+57 (316) 569-9584</span>
            </a>
            <a
              href="tel:+573212140384"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Phone size={12} className="text-blue-brand" />
              <span className="font-body">+57 (321) 214-0384</span>
            </a>
            <a
              href="https://wa.me/573165699584"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <MessageCircle size={12} className="text-blue-brand" />
              <span className="font-body">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
